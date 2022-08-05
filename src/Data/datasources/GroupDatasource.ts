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

    }

    const updateGroup = async (group : GroupEntityType) => {

    }

    const deleteGroup = async (group : GroupEntityType) => {

    }

    return {
        getGroupsByAssignment,
        createGroup,
        updateGroup,
        deleteGroup
    }
}

export default GroupDatasource