import AssignmentRepository from "../../../Data/repositories/AssignmentRepository"
import { AssignmentEntityType } from "../../Entities/AssignmentEntity"


const createAssignmentUseCase = async (assignment : AssignmentEntityType) => {
    const assignmentRepository = AssignmentRepository()
    return assignmentRepository.createAssignment(assignment)
}

export default createAssignmentUseCase