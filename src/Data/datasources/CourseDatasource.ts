import { ClientResponseError } from "pocketbase"
import { db } from "."

const CourseDatasource = () => {
    const getCourses = async () => {
        try {
            const courses = await db.Records.getFullList("courses")
            return { results : courses , error : ""}
        }catch(e ) {
            console.error(e)
            return { results : null , error :  "Error getting courses"}
        }
    }

    return {
        getCourses
    }
}

export default CourseDatasource