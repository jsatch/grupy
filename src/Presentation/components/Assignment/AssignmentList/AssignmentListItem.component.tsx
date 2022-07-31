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
                <Button size="small">
                    Edit
                </Button>
            </CardActions>
        </Card>
    </Grid>
}

interface AssignmentListItemProps {
    assignment : AssignmentEntityType
}

export default AssignmentListItem