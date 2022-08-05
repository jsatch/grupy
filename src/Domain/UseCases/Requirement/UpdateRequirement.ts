import RequirementRepository from "../../../Data/repositories/RequirementRepository"
import { RequirementEntityType } from "../../Entities/RequirementEntity"

const updateRequirementUseCase = async (requirement : RequirementEntityType) => {
    const requirementRepository = RequirementRepository()
    return await requirementRepository.updateRequirement(requirement)
}

export default updateRequirementUseCase