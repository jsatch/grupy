import RequirementRepository from "../../../Data/repositories/RequirementRepository"

const viewRequirementsFromAssignmentUseCase = async (assignmentId : string) => {
    const requirementRepository = RequirementRepository()
    return await requirementRepository.getRequirementsByAssignmentId(assignmentId)
}

export default viewRequirementsFromAssignmentUseCase