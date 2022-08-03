import { db } from "."
import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"

const AssignmentDatasource = () => {
    const getAssignments = async (courseId : string) => {
        try {
            const records = await db.Records.getFullList("assignments", undefined, {
                filter : `course.id = '${courseId}'`
            })
            const assignments : AssignmentEntityType[] = records.map((record :any) => {
                return {
                    id : record.id,
                    name : record.name,
                    courseId : record.course
                }
            })
            return { 
                results : assignments, 
                error : ""
            }
        }catch(e : any ) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error getting assignments from course ${courseId}`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    return {
        getAssignments
    }
}

export default AssignmentDatasource