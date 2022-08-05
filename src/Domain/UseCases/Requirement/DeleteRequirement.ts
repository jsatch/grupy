import RequirementRepository from "../../../Data/repositories/RequirementRepository"

const deleteRequirementUseCase = async (requirementId : string ) => {
    const requirementRepository = RequirementRepository()
    return await requirementRepository.deleteRequirement(requirementId)
}

export default deleteRequirementUseCase