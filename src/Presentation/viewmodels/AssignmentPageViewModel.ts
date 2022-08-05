import { useState } from "react"
import { GroupEntityType } from "../../Domain/Entities/GroupEntity"
import { RequirementEntityType } from "../../Domain/Entities/RequirementEntity"
import viewGroupsFromAssignmentUseCase from "../../Domain/UseCases/Group/viewGroupsFromAssignment"
import createRequirementUseCase from "../../Domain/UseCases/Requirement/CreateRequirement"
import deleteRequirementUseCase from "../../Domain/UseCases/Requirement/DeleteRequirement"
import updateRequirementUseCase from "../../Domain/UseCases/Requirement/UpdateRequirement"
import viewRequirementsFromAssignmentUseCase from "../../Domain/UseCases/Requirement/ViewRequirementsFromAssignment"

const AssignmentPageViewModel = () => {
    const [error, setError] = useState("")
    const [requirements, setRequirements] = useState<RequirementEntityType[]>([])
    const [groups, setGroups] = useState<GroupEntityType[]>([])

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

    const getGroupsByAssignmentId = async (assignmentId : string) => {
        const {results, error} = await viewGroupsFromAssignmentUseCase(assignmentId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setGroups(results!)
        }
    }

    return {
        error,
        requirements,
        groups,
        getRequirementsByAssignmentId,
        createRequirement,
        updateRequirement,
        deleteRequirement,
        getGroupsByAssignmentId
    }

    
}

export default AssignmentPageViewModel