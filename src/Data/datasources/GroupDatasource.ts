import { db } from "."
import { GroupEntityType } from "../../Domain/Entities/GroupEntity"

const GroupDatasource = () => {
    const getGroupsByAssignment = async (assignmentId : string) => {
        try {
            const records = await db.Records.getFullList("groups", undefined, {
                filter : `assignment.id = '${assignmentId}'`
            })
            const groups : GroupEntityType[] = records.map((record : any) => {
                return {
                    id : record.id,
                    name : record.name,
                    number : record.number,
                    assignmentId : record.assignmentId,
                    students : record.students
                }
            })
            return { 
                results : groups, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error getting groups from assignment ${assignmentId}`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const createGroup = async (group : GroupEntityType) => {
        try {
            const record = await db.Records.create("groups", {
                name : group.name,
                number : group.number,
                assignment : group.assignmentId,
                students : group.students
            })
            return { 
                results : record, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error creating a group`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const updateGroup = async (group : GroupEntityType) => {
        try {
            const record = await db.Records.update("groups", group.id!, {
                name : group.name,
                number : group.number,
                assignment : group.assignmentId,
                students : group.students
            })
            return { 
                results : {
                    id : record.id,
                    name : record.name,
                    number : record.number,
                    assignmentId : record.assignment.id,
                    students : record.students
                } , 
                error :  ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error updating a group`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const deleteGroup = async (groupId : string) => {
        try {
            await db.Records.delete("groups", groupId)
            return { 
                results : null, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error deleting group`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    return {
        getGroupsByAssignment,
        createGroup,
        updateGroup,
        deleteGroup
    }
}

export default GroupDatasource