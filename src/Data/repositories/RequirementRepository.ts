import { RequirementEntityType } from "../../Domain/Entities/RequirementEntity"
import RequirementDatasource from "../datasources/RequirementDatasource"

const RequirementRepository = () => {
    const datasource = RequirementDatasource()

    const getRequirementsByAssignmentId = async (assignmentId : string) => {
        return await datasource.getRequirementsByAssignment(assignmentId)
    }

    const createRequirement = async (requirement : RequirementEntityType) => {
        return await datasource.createRequirement(requirement)
    }

    const updateRequirement = async (requirement : RequirementEntityType) => {
        return await datasource.updateRequirement(requirement)
    }

    const deleteRequirement = async (requirementId : string) => {
        return await datasource.deleteRequirement(requirementId)
    }

    return {
        getRequirementsByAssignmentId,
        createRequirement,
        updateRequirement,
        deleteRequirement
    }
}

export default RequirementRepository