import { Box, Container, Grid, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { getMockGroupsData, getMockTasksData } from "../../Mock/mockData"
import GradingPanel from "../components/Grading/GradingPanel.component"
import ResultsPanel from "../components/Grading/ResultsPanel.component"
import GroupList, { GroupListMode } from "../components/Group/GroupList/GroupList.component"
import MainMenuBar from "../components/MainMenuBar.component"

const GradingPage = () => {
    const pages = [
        { label: "Cursos", route: "/" },
        { label: "Configuración", route: "/settings" }
    ]

    const groups = getMockGroupsData()
    const tasks = getMockTasksData()

    const [indexPanel, setIndexPanel] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndexPanel(newValue);
    };

    return <>
        <MainMenuBar pages={pages} />
        <Container>
            <h2>
                Course Name | Assignment Name
            </h2>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <GroupList groups={ groups } columns={1}
                        mode={ GroupListMode.SELECT }
                        onDeleteGroupHandler={ () => {} }/>
                </Grid>
                <Grid item xs={9}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={indexPanel} onChange={handleChange}>
                            <Tab label="Grading" />
                            <Tab label="Results" />
                        </Tabs>
                    </Box>
                </Box>
                <div role="tabpanel"
                    hidden={indexPanel !== 0}>
                    <GradingPanel tasks={ tasks }/>
                </div>
                <div role="tabpanel"
                    hidden={indexPanel !== 1}>
                    <ResultsPanel />
                </div>
                </Grid>
            </Grid>
            
        </Container>
    </>
}

export default GradingPage