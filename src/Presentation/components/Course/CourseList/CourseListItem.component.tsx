import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { CourseEntityType } from "../../../../Domain/Entities/CourseEntity"

const CourseListItem = (props : CourseListItemProps) => {

    const navigate = useNavigate()

    return <Grid item>
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    { props.course.name }
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { props.course.term }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={ () => props.onSelectCourseHandler(props.course) } >
                    Edit
                </Button>
                <Button size="small"
                    onClick={ () => props.onViewAssignmentsHandler(props.course)}>
                    Assignments
                </Button>
            </CardActions>
        </Card>
    </Grid>
}

interface CourseListItemProps {
    course : CourseEntityType
    onSelectCourseHandler : (course : CourseEntityType) => void
    onViewAssignmentsHandler : (course : CourseEntityType) => void
}

export default CourseListItem