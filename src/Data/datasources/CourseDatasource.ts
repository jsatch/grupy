import { db } from "."
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"

const CourseDatasource = () => {
    const getCourses = async () => {
        try {
            const records = await db.Records.getFullList("courses")
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

    const createCourse = async (course : CourseEntityType) => {
        try {
            const record = await db.Records.create("courses", {
                name : course.name,
                term : course.term,
                status : course.status
            })
            return { 
                results : {
                    id : record.id,
                    name : record.name,
                    term : record.term,
                    status : record.status
                } , 
                error :  ""
            }
        }catch(e : any ) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error :  "Error creating courses"}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    return {
        getCourses,
        createCourse
    }
}

export default CourseDatasource