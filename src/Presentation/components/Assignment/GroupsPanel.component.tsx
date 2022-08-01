import { Box, Button, Stack } from "@mui/material"
import { useState } from "react"
import { getMockGroupsData, getMockStudentsData } from "../../../Mock/mockData"
import GroupList, { GroupListMode } from "../Group/GroupList/GroupList.component"
import GroupModal from "../Group/GroupList/GroupModal.component"

const GroupsPanel = () => {
    const groups = getMockGroupsData()
    const students =  getMockStudentsData()

    const [showGroupModal, setShowGroupModal] = useState(true)

    return <Stack sx={ {mt : 2 } }>
        <Box sx={ { mb : 2 }}>
            <Button variant="contained" color="primary">
                Add
            </Button>
        </Box>
        <GroupList groups={groups} columns={2} mode={ GroupListMode.EDIT }/>
        <GroupModal show={showGroupModal} 
            onCloseHandler={ () =>  setShowGroupModal(false)} 
            studentsLeft={ students }
            studentsInGroup={ [] }/>
    </Stack>
}

export default GroupsPanel