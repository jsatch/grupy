import { ClientResponseError } from "pocketbase"
import { db } from "."
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"

const CourseDatasource = () => {
    const getCourses = async () => {
        try {
            const records = await db.Records.getFullList("courses")
            //console.log("records", records)
            const courses : CourseEntityType[] = records.map((record : any) => {
                return {
                    id : record.id,
                    name : record.name,
                    term : record.term,
                    status : record.status
                }
            })
            return { 
                results : courses, 
                error : ""
            }
        }catch(e : any ) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error :  "Error getting courses"}
            }else {
                return { results : [] , error :  ""}
            }
            
        }
    }

    return {
        getCourses
    }
}

export default CourseDatasource