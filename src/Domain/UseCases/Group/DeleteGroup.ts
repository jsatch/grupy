import GroupRepository from "../../../Data/repositories/GroupRepository"
import TaskRepository from "../../../Data/repositories/TaskRepository"
import { GroupEntityType } from "../../Entities/GroupEntity"

const deleteGroupUseCase = async (group : GroupEntityType) => {
    const groupRepository = GroupRepository()
    const taskRepository = TaskRepository()

    const resultsDeleteTasks = await taskRepository.deleteTaskByAssignmentIdByGroupId(
        group.assignmentId, group.id!)
    if (resultsDeleteTasks.error !== "") {
        return resultsDeleteTasks
    }

    return await groupRepository.deleteGroup(group.id!)
}

export default deleteGroupUseCase