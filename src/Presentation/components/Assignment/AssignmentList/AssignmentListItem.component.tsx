import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"

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

export interface Assignment {
    id : string
    name : string
}

interface AssignmentListItemProps {
    assignment : Assignment
}

export default AssignmentListItem