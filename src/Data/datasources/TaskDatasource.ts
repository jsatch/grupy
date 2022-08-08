import { db } from "."
import { TaskEntityType } from "../../Domain/Entities/TaskEntity"

const TaskDatasource = () => {
    const getTasksByAssignmentByGroup = async (assignmentId : string, groupId : string) => {
        try {
            const records = await db.Records.getFullList("tasks", undefined, {
                filter : `assignment.id = '${assignmentId}' && group.id='${groupId}'`
            })

            const tasks : TaskEntityType[] = records.map((record : any) => {
                return {
                    id : record.id,
                    assignmentId : record.assignment.id,
                    groupId : record.group.id,
                    student : record.student,
                    grade : record.grade
                }
            })
            return { 
                results : tasks, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error getting tasks from assignment ${assignmentId}`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const createTask = async (requirementId : string, groupId : string, assignmentId : string) => {
        try {
            const record = await db.Records.create("tasks", {
                requirement : requirementId,
                group : groupId,
                assignment : assignmentId
            })
            return { 
                results : record, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error creating a task`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const updateTask = async (taskId: string, studentId : string, grade : number) => {
        try {
            const record = await db.Records.update("tasks", taskId, {
                student : studentId,
                grade : grade
            })
            return { 
                results : record, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error updating a task`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const deleteTask = async (taskId : string) => {
        try {
            await db.Records.delete("tasks", taskId)
            return { 
                results : null, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error deleting task`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const deleteTasksByAssignmentByGroup = async (assignmentId : string, groupId : string) => {
        try {
            const records = await db.Records.getFullList("tasks", undefined, {
                filter : `assignment.id = '${assignmentId}' && group.id='${groupId}'`
            })
            
            for (let record of records) {
                await db.Records.delete("tasks", record.id)
            }
            return { 
                results : null, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error deleting task by assignment and group`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    return {
        getTasksByAssignmentByGroup,
        createTask,
        updateTask,
        deleteTask,
        deleteTasksByAssignmentByGroup
    }
}

export default TaskDatasource