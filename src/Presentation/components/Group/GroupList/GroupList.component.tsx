import { Grid } from "@mui/material"
import { GroupEntityType } from "../../../../Domain/Entities/GroupEntity"
import GroupListItem from "./GroupListItem.component"

const GroupList = (props : GroupListProps) => {
    return <Grid container spacing={2} columns={2}>
        {
            props.groups.map((group : GroupEntityType) => (
                <GroupListItem key={ group.id } group={ group } />
            ))
        }
    </Grid>
}

interface GroupListProps {
    groups : GroupEntityType[]
}

export default GroupList