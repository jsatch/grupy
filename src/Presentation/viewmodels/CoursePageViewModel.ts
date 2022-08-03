import { useState } from "react"
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import viewAssignmentsFromCourseUseCase from "../../Domain/UseCases/Assignment/ViewAssignmentsFromCourse"

const CoursePageVieWModel = () => {
    const [error, setError] = useState("")
    const [assignments, setAssignments] = useState<AssignmentEntityType[]>([])

    const getAssignmentsByCourseId = async (courseId : string) => {
        const {results, error} = await viewAssignmentsFromCourseUseCase(courseId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setAssignments(results!)
        }
    }

    return {
        assignments,
        getAssignmentsByCourseId
    }
}

export default CoursePageVieWModel