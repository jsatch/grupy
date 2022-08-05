import { Box, Container, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import GroupsPanel from "../components/Assignment/GroupsPanel.component"
import InstructionsPanel from "../components/Assignment/InstructionsPanel.component"
import RequirementsPanel from "../components/Assignment/RequirementsPanel.component"
import MainMenuBar from "../components/MainMenuBar.component"
import useViewModel from "../viewmodels/AssignmentPageViewModel"

interface AssigmentPageState {
    course : CourseEntityType
    assignment : AssignmentEntityType
}

const AssignmentPage = () => {
    const pages = [
        { label : "Cursos", route : "/"},
        { label : "Configuración", route : "/settings"}
    ]

    const location = useLocation();
    const state = location.state as AssigmentPageState

    const {
        error, requirements,
        getRequirementsByAssignmentId
    } = useViewModel()

    useEffect(() => {
        getRequirementsByAssignmentId(state.assignment.id!)
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
                    requirements={ requirements }/>
            </div>
            <div role="tabpanel"
                hidden={indexPanel !== 2}>
                <GroupsPanel />
            </div>
        </Container>
    </>
}

export default AssignmentPage