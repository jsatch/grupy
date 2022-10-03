import GroupRepository from "../../../Data/repositories/GroupRepository"
import RequirementRepository from "../../../Data/repositories/RequirementRepository"
import TaskRepository from "../../../Data/repositories/TaskRepository"
import { RequirementEntityType } from "../../Entities/RequirementEntity"
import { TaskEntityType } from "../../Entities/TaskEntity"

const deleteRequirementUseCase = async (requirement : RequirementEntityType ) => {
    const requirementRepository = RequirementRepository()
    const groupRepository = GroupRepository()
    const taskRepository = TaskRepository()

    //Get Groups
    const resultsGetGroups = await groupRepository.getGroupsByAssignmentId(requirement.assignmentId)
    if (resultsGetGroups.error !== "") {
        return resultsGetGroups
    }
    const groups = resultsGetGroups.results

    for (let group of groups!) {
        // Get Task to delete for every group
        const resultsGetTask = await  taskRepository.getTaskByRequirementIdByGroupId(requirement.id!, group.id!)
        if (resultsGetTask.error !== "") {
            return resultsGetTask
        }
        const task = resultsGetTask.results as TaskEntityType
        

        // Delete Task
        const resultsDeleteTask = await taskRepository.deleteTask(task.id!)
        if (resultsDeleteTask.error !== "") {
            return resultsDeleteTask
        }
    }
    
    // Delete Requirement
    return await requirementRepository.deleteRequirement(requirement.id!)
}

export default deleteRequirementUseCase