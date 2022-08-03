import AssignmentRepository from "../../../Data/repositories/AssignmentRepository"

const viewAssignmentsFromCourseUseCase = async (courseId : string) => {
    const assignmentRepository = AssignmentRepository()
    return await assignmentRepository.getAssignmentsByCourseId(courseId)
}

export default viewAssignmentsFromCourseUseCase