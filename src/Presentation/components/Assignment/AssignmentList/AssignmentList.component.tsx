import { Grid } from "@mui/material"
import { AssignmentEntityType } from "../../../../Domain/Entities/AssignmentEntity"
import AssignmentListItem from "./AssignmentListItem.component"

const AssignmentList = (props : AssignmentListProps) => {
    return <Grid container spacing={2} columns={2}>
        {
            props.assignments.map((assignment : AssignmentEntityType) => (
                <AssignmentListItem key={assignment.id} assignment={assignment} />
            ))
        }
        
    </Grid>
}

interface AssignmentListProps {
    assignments : AssignmentEntityType[]
}

export default AssignmentList