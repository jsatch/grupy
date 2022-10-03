import GroupRepository from "../../../Data/repositories/GroupRepository";
import RequirementRepository from "../../../Data/repositories/RequirementRepository";
import TaskRepository from "../../../Data/repositories/TaskRepository";
import { RequirementEntityType } from "../../Entities/RequirementEntity";

const createRequirementUseCase = async (requirement : RequirementEntityType) => {
    const requirementRepository = RequirementRepository()
    const groupRepository = GroupRepository()
    const taskRepository = TaskRepository()

    // Create requirement
    const resultsCreateRequirement =  await requirementRepository.createRequirement(requirement)
    if (resultsCreateRequirement.error !== "") {
        return resultsCreateRequirement
    }

    const requirementId = (resultsCreateRequirement.results as RequirementEntityType).id!

    // Get groups from the assignment
    const resultsGetGroups = await groupRepository.getGroupsByAssignmentId(requirement.assignmentId)
    if (resultsGetGroups.error !== "") {
        return resultsGetGroups
    }

    // Create a task for each group
    for (let group of resultsGetGroups.results!) {
        await taskRepository.createTask(requirementId, group.id!, requirement.assignmentId)
    }

    return resultsCreateRequirement
    
}

export default createRequirementUseCase