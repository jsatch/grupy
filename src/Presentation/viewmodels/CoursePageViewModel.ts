import { useState } from "react"
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import createAssignmentUseCase from "../../Domain/UseCases/Assignment/CreateAssignment"
import viewAssignmentsFromCourseUseCase from "../../Domain/UseCases/Assignment/ViewAssignmentsFromCourse"
import { AssignmentModalMode } from "../components/Course/AssignmentsPanel/AssignmentModal.component"

const CoursePageVieWModel = () => {
    const [error, setError] = useState("")
    const [showAssignmentModal, setShowAssignmentModal] = useState(false)
    const [assignmentModalMode, setAssignmentModalMode] = useState(AssignmentModalMode.Add)
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

    const createAssignment = async (assignment : AssignmentEntityType) => {
        const {error} = await createAssignmentUseCase(assignment)

        if (error !== "") {
            setError(error)
        } else {
            setError(error)
            setShowAssignmentModal(false)
            getAssignmentsByCourseId(assignment.courseId)
        }
    }

    const updateAssignment = async (assignment : AssignmentEntityType) => {
        return
    }

    return {
        error,
        assignments,
        showAssignmentModal,
        assignmentModalMode,
        setShowAssignmentModal,
        setAssignmentModalMode,
        getAssignmentsByCourseId,
        createAssignment,
        updateAssignment
    }
}

export default CoursePageVieWModel