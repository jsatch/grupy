import { Grid } from "@mui/material"
import CourseListItem, { Course } from "./CourseListItem.component"

const CourseList = (props : CourseListProps) => {
    return <Grid container spacing={2} columns={2}>
        {
            props.courses.map((course : Course) => (
                <CourseListItem key={course.id} course={course} />
            ))
        }
        
    </Grid>
}

interface CourseListProps {
    courses : Course[]
}

export default CourseList