import RequirementRepository from "../../../Data/repositories/RequirementRepository";
import { RequirementEntityType } from "../../Entities/RequirementEntity";

const createRequirementUseCase = async (requirement : RequirementEntityType) => {
    const requirementRepository = RequirementRepository()
    return await requirementRepository.createRequirement(requirement)
}

export default createRequirementUseCase