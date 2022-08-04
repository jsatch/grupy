import { useState } from "react"
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import { StudentEntityType } from "../../Domain/Entities/StudentEntity"
import createAssignmentUseCase from "../../Domain/UseCases/Assignment/CreateAssignment"
import viewAssignmentsFromCourseUseCase from "../../Domain/UseCases/Assignment/ViewAssignmentsFromCourse"
import deleteStudentUseCase from "../../Domain/UseCases/Student/CreateStudent"
import createStudentUseCase from "../../Domain/UseCases/Student/DeleteStudent"
import viewStudentsFromCourseUseCase from "../../Domain/UseCases/Student/ViewStudentsFromCourse"
import { AssignmentModalMode } from "../components/Course/AssignmentsPanel/AssignmentModal.component"

const CoursePageVieWModel = () => {
    const [error, setError] = useState("")
    const [showAssignmentModal, setShowAssignmentModal] = useState(false)
    const [assignmentModalMode, setAssignmentModalMode] = useState(AssignmentModalMode.Add)
    const [assignments, setAssignments] = useState<AssignmentEntityType[]>([])
    const [students, setStudents] = useState<StudentEntityType[]>([])

    const getAssignmentsByCourseId = async (courseId : string) => {
        const {results, error} = await viewAssignmentsFromCourseUseCase(courseId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setAssignments(results!)
        }
    }

    const getStudentsByCourseId = async (courseId : string) => {
        const {results, error} = await viewStudentsFromCourseUseCase(courseId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setStudents(results!)
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

    const enrollStudent = async (student : StudentEntityType) => {
        const {error} = await createStudentUseCase(student)
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getStudentsByCourseId(student.courseId)
        }
    }

    const deleteStudents = async (studentIds : string[], courseId : string) => {
        for (let id of studentIds) {
            const {error} = await deleteStudentUseCase(id)
            if (error !== "") break
        }
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getStudentsByCourseId(courseId)
        }
    }

    return {
        error,
        assignments,
        showAssignmentModal,
        assignmentModalMode,
        students,
        setShowAssignmentModal,
        setAssignmentModalMode,
        getAssignmentsByCourseId,
        createAssignment,
        updateAssignment,
        getStudentsByCourseId,
        enrollStudent,
        deleteStudents
    }
}

export default CoursePageVieWModel