import { Box, Container, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import { StudentEntityType } from "../../Domain/Entities/StudentEntity"
import GroupsPanel from "../components/Assignment/GroupsPanel.component"
import InstructionsPanel from "../components/Assignment/InstructionsPanel.component"
import RequirementsPanel from "../components/Assignment/RequirementsPanel.component"
import MainMenuBar from "../components/MainMenuBar.component"
import useViewModel from "../viewmodels/AssignmentPageViewModel"

interface AssigmentPageState {
    course : CourseEntityType
    assignment : AssignmentEntityType
    students : StudentEntityType[]
}

const AssignmentPage = () => {
    const pages = [
        { label : "Cursos", route : "/"},
        { label : "Configuración", route : "/settings"}
    ]

    const location = useLocation();
    const state = location.state as AssigmentPageState

    const {
        error, requirements, groups, students, showGroupModal,
        getRequirementsByAssignmentId, createRequirement, updateRequirement,
        deleteRequirement, getGroupsByAssignmentId, createGroup, deleteGroup,
        getStudentsByCourse,
        setShowGroupModal
    } = useViewModel()

    useEffect(() => {
        getStudentsByCourse(state.course.id!)
        getRequirementsByAssignmentId(state.assignment.id!)
        getGroupsByAssignmentId(state.assignment.id!)
    }, [])
    
    const [indexPanel, setIndexPanel] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndexPanel(newValue);
    };
    
    return <>
        <MainMenuBar pages={pages}/>
        <Container>
            <h2>
                { 
                    `${state.course.name} | ${ state.assignment.name }`
                }
            </h2>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={indexPanel} onChange={handleChange}>
                        <Tab label="Instructions" />
                        <Tab label="Requirements" />
                        <Tab label="Groups" />
                    </Tabs>
                </Box>
            </Box>
            <div role="tabpanel"
                hidden={indexPanel !== 0}>
                <InstructionsPanel />
            </div>
            <div role="tabpanel"
                hidden={indexPanel !== 1}>
                <RequirementsPanel 
                    assignment={ state.assignment }
                    requirements={ requirements }
                    onCreateRequirementHandler={ createRequirement }
                    onUpdateRequirementHandler={ updateRequirement }
                    onDeleteRequirementHandler={ deleteRequirement }/>
            </div>
            <div role="tabpanel"
                hidden={indexPanel !== 2}>
                <GroupsPanel groups={ groups }
                    students={ students }
                    assignment={ state.assignment }
                    setShowGroupModal={ setShowGroupModal }
                    onSaveGroupHandler={ createGroup }
                    onDeleteGroupHandler={ deleteGroup }
                    showGroupModal={ showGroupModal }
                    onCloseHandler={ () => setShowGroupModal(false) }/>
            </div>
        </Container>
    </>
}

export default AssignmentPage