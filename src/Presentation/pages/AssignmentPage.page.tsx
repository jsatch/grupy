import { Box, Container, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import GroupsPanel from "../components/Assignment/GroupsPanel.component"
import InstructionsPanel from "../components/Assignment/InstructionsPanel.component"
import RequirementsPanel from "../components/Assignment/RequirementsPanel.component"
import MainMenuBar from "../components/MainMenuBar.component"

const AssignmentPage = () => {
    const pages = [
        { label : "Cursos", route : "/"},
        { label : "Configuración", route : "/settings"}
    ]
    
    const [indexPanel, setIndexPanel] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndexPanel(newValue);
    };
    
    return <>
        <MainMenuBar pages={pages}/>
        <Container maxWidth="md">
            <h2>
                Assignment Name
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
                <RequirementsPanel />
            </div>
            <div role="tabpanel"
                hidden={indexPanel !== 2}>
                <GroupsPanel />
            </div>
        </Container>
    </>
}

export default AssignmentPage