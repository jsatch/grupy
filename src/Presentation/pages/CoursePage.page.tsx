import { Box, Container, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
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

    const { assignments, getAssignmentsByCourseId } = useViewModel()

    useEffect(() => {
        getAssignmentsByCourseId(state.course.id!)
    }, [])

    const [indexPanel, setIndexPanel] = useState(0)
    const [selectCourse, setSelectedCourse] = useState<CourseEntityType | null>(null)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndexPanel(newValue);
    };

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
                    assignments={ assignments }
                    course={ state.course }/>
            </div>
            <div role="tabpanel"
                hidden={indexPanel !== 1}>
                <StudentsPanel />
            </div>
            
        </Container>
    </>

}

export default CoursePage