import { Box, Container, Grid, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import { GroupEntityType } from "../../Domain/Entities/GroupEntity"
import { TaskEntityType } from "../../Domain/Entities/TaskEntity"
import { getMockGroupsData } from "../../Mock/mockData"
import GradingPanel from "../components/Grading/GradingPanel.component"
import ResultsPanel from "../components/Grading/ResultsPanel.component"
import GroupList, { GroupListMode } from "../components/Group/GroupList/GroupList.component"
import MainMenuBar from "../components/MainMenuBar.component"
import useViewModel from "../viewmodels/GradingPageViewModel"

interface GradingPageState {
    course : CourseEntityType
    assignment : AssignmentEntityType
}

const GradingPage = () => {
    const pages = [
        { label: "Cursos", route: "/" },
        { label: "Configuración", route: "/settings" }
    ]

    const location = useLocation();
    const state = location.state as GradingPageState

    const {
        error, groups, tasks, selectedGroup, groupReportData,
        setSelectedGroup, getGroupsByAssignmentId, getTasksByAssignmentIdByGroupId, updateTask } = useViewModel()

    useEffect(()=> {
        getGroupsByAssignmentId(state.assignment.id!)
    }, [])


    const [indexPanel, setIndexPanel] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndexPanel(newValue);
    };

    const handleSelectGroup = (group : GroupEntityType) => {
        setSelectedGroup(group)
        getTasksByAssignmentIdByGroupId(state.assignment.id!, group.id!)
    }

    const handleUpdateTask = (task : TaskEntityType) => {
        
        updateTask(task.id!, task.studentId, task.grade, state.assignment.id!, selectedGroup!.id!)
    }

    console.log("handleUpdateTask:", groupReportData)


    return <>
        <MainMenuBar pages={pages} />
        <Container>
            <h2>
                Grading
            </h2>
            <h3>
                { state.course.name } | { state.assignment.name }
            </h3>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <GroupList groups={ groups } columns={1}
                        mode={ GroupListMode.SELECT }
                        onSelectGroupHandler={ handleSelectGroup }
                        onDeleteGroupHandler={ () => {} }/>
                </Grid>
                <Grid item xs={9}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <h2>{ selectedGroup !== null ?selectedGroup?.name : "Select a group" }</h2>
                        <Tabs value={indexPanel} onChange={handleChange}>
                            <Tab label="Grading" />
                            <Tab label="Results" />
                        </Tabs>
                    </Box>
                </Box>
                <div role="tabpanel"
                    hidden={indexPanel !== 0}>
                    <GradingPanel tasks={ tasks }
                        studentsInGroup={ selectedGroup != null ? selectedGroup!.students : []}
                        onUpdateTask={ handleUpdateTask } />
                </div>
                <div role="tabpanel"
                    hidden={indexPanel !== 1}>
                    <ResultsPanel groupReportData={ groupReportData }/>
                </div>
                </Grid>
            </Grid>
            
        </Container>
    </>
}

export default GradingPage