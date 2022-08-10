import TaskRepository from "../../../Data/repositories/TaskRepository"

const updateTaskUseCase = async (taskId : string, studentId : string, grade : number) => {
    const taskRepository = TaskRepository()
    return await taskRepository.updateTask(taskId, studentId, grade)
}

export default updateTaskUseCase