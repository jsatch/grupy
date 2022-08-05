import { Box, Button, Stack } from "@mui/material"
import { useState } from "react"
import { GroupEntityType } from "../../../Domain/Entities/GroupEntity"
import { getMockGroupsData, getMockStudentsData } from "../../../Mock/mockData"
import GroupList, { GroupListMode } from "../Group/GroupList/GroupList.component"
import GroupModal from "../Group/GroupList/GroupModal.component"

const GroupsPanel = (props : GroupsPanelProps) => {

    const [showGroupModal, setShowGroupModal] = useState(false)

    const students = getMockStudentsData()

    return <Stack sx={ {mt : 2 } }>
        <Box sx={ { mb : 2 }}>
            <Button variant="contained" color="primary">
                Add
            </Button>
        </Box>
        <GroupList groups={ props.groups } columns={2} mode={ GroupListMode.EDIT }/>
        <GroupModal show={showGroupModal} 
            onCloseHandler={ () =>  setShowGroupModal(false)} 
            studentsLeft={ students }
            studentsInGroup={ [] }/>
    </Stack>
}

interface GroupsPanelProps {
    groups : GroupEntityType[]
}

export default GroupsPanel