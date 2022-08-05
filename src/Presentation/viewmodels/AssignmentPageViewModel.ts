import { useState } from "react"
import { RequirementEntityType } from "../../Domain/Entities/RequirementEntity"
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

    return {
        error,
        requirements,
        getRequirementsByAssignmentId
    }
}

export default AssignmentPageViewModel