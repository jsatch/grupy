import { Grid } from "@mui/material"
import { CourseEntityType } from "../../../../Domain/Entities/CourseEntity"
import CourseListItem from "./CourseListItem.component"

const CourseList = (props : CourseListProps) => {
    return <Grid container spacing={2} columns={2}>
        {
            props.courses.map((course : CourseEntityType) => (
                <CourseListItem key={course.id} 
                    course={course}
                    onSelectCourseHandler={ props.onSelectCourseHandler } />
            ))
        }
        
    </Grid>
}

interface CourseListProps {
    courses : CourseEntityType[]
    onSelectCourseHandler : (couse : CourseEntityType) => void 
}

export default CourseList