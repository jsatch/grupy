import TaskRepository from "../../../Data/repositories/TaskRepository"

const viewTasksFromAssignmentGroupUseCase = async (assignmentId : string, groupId : string) => {
    const taskRepository = TaskRepository()
    return await taskRepository.getTasksByAssignmentIdByGroupId(assignmentId, groupId)
}

export default viewTasksFromAssignmentGroupUseCase