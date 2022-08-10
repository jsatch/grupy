import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { AssignmentEntityType } from "../../../../Domain/Entities/AssignmentEntity"

const AssignmentListItem = (props : AssignmentListItemProps) => {
    return <Grid item>
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    { props.assignment.name }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={ () => props.onSelectAssignmentHandler(props.assignment) }>
                    Edit
                </Button>
                <Button size="small"
                    onClick={ () => props.onGradeHandler(props.assignment) }>
                    Grade
                </Button>
            </CardActions>
        </Card>
    </Grid>
}

interface AssignmentListItemProps {
    assignment : AssignmentEntityType
    onSelectAssignmentHandler : (assignment : AssignmentEntityType) => void
    onGradeHandler : (assignment : AssignmentEntityType) => void
}

export default AssignmentListItem