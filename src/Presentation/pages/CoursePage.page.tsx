import { Box, Container, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import AssignmentsPanel from "../components/Course/AssignmentsPanel.component"
import StudentsPanel from "../components/Course/StudentsPanel.component"
import MainMenuBar from "../components/MainMenuBar.component"

const CoursePage = () => {
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
                Course NAme
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
                hidden={indexPanel === 0}>
                <StudentsPanel />
            </div>
            <div role="tabpanel"
                hidden={indexPanel === 1}>
                <AssignmentsPanel />
            </div>
        </Container>
    </>

}

export default CoursePage