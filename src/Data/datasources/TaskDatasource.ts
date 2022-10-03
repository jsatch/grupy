import { Record } from "pocketbase"
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
                    assignmentId : record.assignment,
                    groupId : record.group,
                    studentId : record.student,
                    requirementId : record.requirement,
                    grade : record.grade
                }
            })
            let completeTasks : TaskEntityType[] = []
            for (let task of tasks) {
                const record = await db.Records.getOne("requirements", task.requirementId)
                let recordStudent: Record;
                if (task.studentId !== "") {
                    recordStudent = await db.Records.getOne("students", task.studentId)
                }

                const newTask : TaskEntityType = {
                    ...task,
                    requirement : {
                        id : record.id,
                        assignmentId : record.assignment,
                        description : record.description,
                        complexity : record.complexity,
                        category : record.category
                    },
                    student : task.studentId !== "" ? {
                        id : recordStudent!.id,
                        name : recordStudent!.name,
                        studentId : recordStudent!.studentId,
                        courseId : recordStudent!.courseId,
                        email : recordStudent!.email
                    } : undefined
                }
                completeTasks.push(newTask)
            }
            return { 
                results : completeTasks, 
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

    const getTaskByRequirementByGroup = async (requirementId : string, groupId : string) => {
        try {
            const records = await db.Records.getFullList("tasks", undefined, {
                filter : `requirement.id='${requirementId}' && group.id='${groupId}'`
            })
            if (records.length > 0) {
                return { results : {
                    id : records[0].id,
                    assignmentId : records[0].assignment.id,
                    groupId : records[0].group.id,
                    student : records[0].student,
                    grade  : records[0].grade
                } , error : ""}
            }else {
                return { results : null , error : `Error. No task found`}
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error getting a task`}
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
        deleteTasksByAssignmentByGroup,
        getTaskByRequirementByGroup
    }
}

export default TaskDatasource