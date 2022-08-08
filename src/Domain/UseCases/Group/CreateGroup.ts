import GroupRepository from "../../../Data/repositories/GroupRepository";
import RequirementRepository from "../../../Data/repositories/RequirementRepository";
import TaskRepository from "../../../Data/repositories/TaskRepository";
import { GroupEntityType } from "../../Entities/GroupEntity";

const createGroupUseCase = async (group : GroupEntityType) => {
    const groupRepository = GroupRepository()
    const requirementRepository = RequirementRepository()
    const taskRepository = TaskRepository()

    const resultsCreateGroup = await groupRepository.createGroup(group)

    if (resultsCreateGroup.error !== "") {
        return resultsCreateGroup
    }

    const groupId = (resultsCreateGroup.results as GroupEntityType).id

    const resultsGetRequirements = await requirementRepository.getRequirementsByAssignmentId(
        group.assignmentId)

    if (resultsGetRequirements.error !== "") {
        return resultsGetRequirements
    }

    const requirements = resultsGetRequirements.results

    for (let req of requirements!) {
        const resultCreateTask = await taskRepository.createTask(
            req.id!, groupId!, group.assignmentId)
        
    }

    return resultsCreateGroup

}

export default createGroupUseCase