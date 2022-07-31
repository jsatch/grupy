import { Grid } from "@mui/material"
import AssignmentListItem, { Assignment } from "./AssignmentListItem.component"

const AssignmentList = (props : AssignmentListProps) => {
    return <Grid container spacing={2} columns={2}>
        {
            props.assignments.map((assignment : Assignment) => (
                <AssignmentListItem key={assignment.id} assignment={assignment} />
            ))
        }
        
    </Grid>
}

interface AssignmentListProps {
    assignments : Assignment[]
}

export default AssignmentList