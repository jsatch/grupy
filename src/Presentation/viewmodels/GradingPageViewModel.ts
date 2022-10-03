import { useState } from "react"
import { GroupEntityType } from "../../Domain/Entities/GroupEntity"
import viewGroupsFromAssignmentUseCase from "../../Domain/UseCases/Group/ViewGroupsFromAssignment"
import { TaskEntityType } from "../../Domain/Entities/TaskEntity"
import viewTasksFromAssignmentGroupUseCase from "../../Domain/UseCases/Task/ViewTasksFromAssignmentGroup"
import updateTaskUseCase from "../../Domain/UseCases/Task/UpdateTask"
import generateGroupReportUseCase from "../../Domain/UseCases/Report/GenerateGroupReport"
import { ReportEntityType } from "../../Domain/Entities/ReportEntity"

const GradingPageViewModel = () => {
    const [error, setError] = useState("")
    const [groups, setGroups] = useState<GroupEntityType[]>([])
    const [tasks, setTasks] = useState<TaskEntityType[]>([])
    const [selectedGroup, setSelectedGroup] = useState<GroupEntityType | null>(null)
    const [groupReportData, setGroupReportData] = useState<ReportEntityType | null>(null)

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
            generateReportData(assignmentId, groupId)
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

    const generateReportData = async (assignmentId : string, groupId : string) => {
        const {results, error} = await generateGroupReportUseCase(assignmentId, groupId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setGroupReportData(results)
        }
    }

    return {
        error,
        groups,
        tasks,
        selectedGroup,
        groupReportData,
        setSelectedGroup,
        getGroupsByAssignmentId,
        getTasksByAssignmentIdByGroupId,
        updateTask,
        generateReportData
    }
}

export default GradingPageViewModel