import { useState } from "react"
import { RequirementEntityType } from "../../Domain/Entities/RequirementEntity"
import createRequirementUseCase from "../../Domain/UseCases/Requirement/CreateRequirement"
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

    return {
        error,
        requirements,
        getRequirementsByAssignmentId,
        createRequirement
    }

    
}

export default AssignmentPageViewModel