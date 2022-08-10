import { useState } from "react"
import { GroupEntityType } from "../../Domain/Entities/GroupEntity"
import viewGroupsFromAssignmentUseCase from "../../Domain/UseCases/Group/ViewGroupsFromAssignment"
import { TaskEntityType } from "../../Domain/Entities/TaskEntity"
import viewTasksFromAssignmentGroupUseCase from "../../Domain/UseCases/Task/ViewTasksFromAssignmentGroup"
import updateTaskUseCase from "../../Domain/UseCases/Task/UpdateTask"

const GradingPageViewModel = () => {
    const [error, setError] = useState("")
    const [groups, setGroups] = useState<GroupEntityType[]>([])
    const [tasks, setTasks] = useState<TaskEntityType[]>([])
    const [selectedGroup, setSelectedGroup] = useState<GroupEntityType | null>(null)

    const getGroupsByAssignmentId = async (assignmentId : string) => {
        const {results, error} = await viewGroupsFromAssignmentUseCase(assignmentId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setGroups(results!)
        }
    }

    const getTasksByAssignmentIdByGroupId = async (assignmentId : string, groupId : string) => {
        const {results, error} = await viewTasksFromAssignmentGroupUseCase(assignmentId, groupId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setTasks(results!)
        }
    }

    const updateTask = async (taskId : string, studentId : string, grade : number, assignmentId : string, groupId : string) => {
        const {error} = await updateTaskUseCase(taskId, studentId, grade)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getTasksByAssignmentIdByGroupId(assignmentId, groupId)
        }
    }

    return {
        error,
        groups,
        tasks,
        selectedGroup,
        setSelectedGroup,
        getGroupsByAssignmentId,
        getTasksByAssignmentIdByGroupId,
        updateTask

    }
}

export default GradingPageViewModel