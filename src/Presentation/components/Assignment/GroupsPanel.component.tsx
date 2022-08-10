import { Box, Button, Stack } from "@mui/material"
import { AssignmentEntityType } from "../../../Domain/Entities/AssignmentEntity"
import { GroupEntityType } from "../../../Domain/Entities/GroupEntity"
import { StudentEntityType } from "../../../Domain/Entities/StudentEntity"
import GroupList, { GroupListMode } from "../Group/GroupList/GroupList.component"
import GroupModal from "../Group/GroupList/GroupModal.component"

const GroupsPanel = (props : GroupsPanelProps) => {
    
    return <Stack sx={ {mt : 2 } }>
        <Box sx={ { mb : 2 }}>
            <Button variant="contained" color="primary"
                onClick={ () => props.setShowGroupModal(true) }>
                Add
            </Button>
        </Box>
        <GroupList groups={ props.groups } 
            columns={2} 
            mode={ GroupListMode.EDIT }
            onSelectGroupHandler={ () => {} }
            onDeleteGroupHandler={ props.onDeleteGroupHandler }/>
        {
            (()=> {
                if (props.showGroupModal) {
                    return <GroupModal show={props.showGroupModal} 
                        assignmentId={props.assignment.id!}
                        onCloseHandler={ props.onCloseHandler } 
                        studentsLeft={ props.students }
                        studentsInGroup={ [] }
                        onSaveGroupHandler={ props.onSaveGroupHandler }/>
                }
            })()
        }
        
    </Stack>
}

interface GroupsPanelProps {
    groups : GroupEntityType[]
    students : StudentEntityType[]
    showGroupModal : boolean
    assignment : AssignmentEntityType
    setShowGroupModal : (show : boolean) => void
    onCloseHandler : () => void
    onSaveGroupHandler : (group : GroupEntityType) => void
    onDeleteGroupHandler : (group : GroupEntityType) => void
}

export default GroupsPanel