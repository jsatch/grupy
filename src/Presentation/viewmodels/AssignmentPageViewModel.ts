import { useState } from "react"
import { RequirementEntityType } from "../../Domain/Entities/RequirementEntity"
import createRequirementUseCase from "../../Domain/UseCases/Requirement/CreateRequirement"
import deleteRequirementUseCase from "../../Domain/UseCases/Requirement/DeleteRequirement"
import updateRequirementUseCase from "../../Domain/UseCases/Requirement/UpdateRequirement"
import viewRequirementsFromAssignmentUseCase from "../../Domain/UseCases/Requirement/ViewRequirementsFromAssignment"

const AssignmentPageViewModel = () => {
    const [error, setError] = useState("")
    const [requirements, setRequirements] = useState<RequirementEntityType[]>([])

    const getRequirementsByAssignmentId = async (assignmentId : string) => {
        const {results, error} = await viewRequirementsFromAssignmentUseCase(assignmentId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setRequirements(results!)
        }
    }

    const createRequirement = async(requirement : RequirementEntityType) => {
        const {error} = await createRequirementUseCase(requirement)
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getRequirementsByAssignmentId(requirement.assignmentId)
        }
    }

    const updateRequirement = async(requirement : RequirementEntityType) => {
        const {error} = await updateRequirementUseCase(requirement)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getRequirementsByAssignmentId(requirement.assignmentId)
        }
    }

    const deleteRequirement = async(requirementId : string, assignmentId : string) => {
        const {error} = await deleteRequirementUseCase(requirementId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getRequirementsByAssignmentId(assignmentId)
        }
    }

    return {
        error,
        requirements,
        getRequirementsByAssignmentId,
        createRequirement,
        updateRequirement,
        deleteRequirement
    }

    
}

export default AssignmentPageViewModel