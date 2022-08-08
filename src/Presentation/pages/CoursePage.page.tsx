import { Box, Container, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import { AssignmentModalMode } from "../components/Course/AssignmentsPanel/AssignmentModal.component"
import AssignmentsPanel from "../components/Course/AssignmentsPanel/AssignmentsPanel.component"
import StudentsPanel from "../components/Course/StudentsPanel.component"
import MainMenuBar from "../components/MainMenuBar.component"
import useViewModel from "../viewmodels/CoursePageViewModel"

interface CoursePageState {
    course : CourseEntityType
}

const CoursePage = () => {
    const pages = [
        { label: "Cursos", route: "/" },
        { label: "Configuración", route: "/settings" }
    ]

    const location = useLocation();
    const state = location.state as CoursePageState

    const navigate = useNavigate()

    const { assignments, error, showAssignmentModal, students,
        getAssignmentsByCourseId, setShowAssignmentModal, createAssignment,
        updateAssignment, setAssignmentModalMode , getStudentsByCourseId,
        enrollStudent, deleteStudents
    } = useViewModel()

    useEffect(() => {
        getAssignmentsByCourseId(state.course.id!)
        getStudentsByCourseId(state.course.id!)
    }, [])

    const [indexPanel, setIndexPanel] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndexPanel(newValue);
    };

    const handleDeleteStudents = (studentsId : string[]) => {
        deleteStudents(studentsId, state.course.id!)
    }

    const handleSelectAssignment = (assignment : AssignmentEntityType) => {
        navigate("/assignment", {
            state : {
                course : state.course,
                assignment : assignment,
                students : students
            }
        })
    }

    return <>
        <MainMenuBar pages={pages} />
        <Container>
            <h2>
                { state.course.name }
            </h2>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={indexPanel} onChange={handleChange}>
                        <Tab label="Assignments" />
                        <Tab label="Students" />
                    </Tabs>
                </Box>
            </Box>
            <div role="tabpanel"
                hidden={indexPanel !== 0}>
                <AssignmentsPanel 
                    showAssignmentModal={ showAssignmentModal }
                    assignments={ assignments }
                    course={ state.course }
                    onCreateAssignmentHandler={ createAssignment }
                    onUpdateAssignmentHandler={ updateAssignment }
                    onSelectAssignmentHandler={ handleSelectAssignment }
                    onCloseHandler={ () => {
                        setAssignmentModalMode(AssignmentModalMode.Add)
                        setShowAssignmentModal(false) 
                    } }
                    openAssignmentModal={ () => {
                        setShowAssignmentModal(true)
                    }}/>
            </div>
            <div role="tabpanel"
                hidden={indexPanel !== 1}>
                <StudentsPanel 
                    course={state.course}
                    students={ students }
                    onEnrollStudentHandler={ enrollStudent }
                    onDeleteStudentsHandler={ handleDeleteStudents }/>
            </div>
            
        </Container>
    </>

}

export default CoursePage