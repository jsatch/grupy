import { Grid } from "@mui/material"
import { GroupEntityType } from "../../../../Domain/Entities/GroupEntity"
import GroupListItem from "./GroupListItem.component"

export enum GroupListMode {
    EDIT, SELECT
}

const GroupList = (props : GroupListProps) => {
    return <Grid container spacing={2} columns={props.columns}>
        {
            props.groups.map((group : GroupEntityType) => (
                <GroupListItem key={ group.id } group={ group } mode={props.mode} />
            ))
        }
    </Grid>
}

interface GroupListProps {
    groups : GroupEntityType[]
    columns : number
    mode : GroupListMode
}

export default GroupList