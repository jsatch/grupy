import TaskDatasource from "../datasources/TaskDatasource"

const TaskRepository = () => {
    const datasource = TaskDatasource()

    const getTasksByAssignmentIdByGroupId = async (assignmentId : string, groupId : string) => {
        return await datasource.getTasksByAssignmentByGroup(assignmentId, groupId)
    }

    const createTask = async (requirementId : string, groupId : string, assignmentId : string) => {
        return await datasource.createTask(requirementId, groupId, assignmentId)
    }

    const updateTask = async (taskId : string, studentId : string, grade : number) => {
        return await datasource.updateTask(taskId, studentId, grade)
    }

    const deleteTask = async (taskId : string) => {
        return await datasource.deleteTask(taskId)
    }

    const deleteTaskByAssignmentIdByGroupId = async (assignmentId : string, groupId : string) => {
        return datasource.deleteTasksByAssignmentByGroup(assignmentId, groupId)
    }

    return {
        getTasksByAssignmentIdByGroupId,
        createTask,
        updateTask,
        deleteTask,
        deleteTaskByAssignmentIdByGroupId
    }
}

export default TaskRepository