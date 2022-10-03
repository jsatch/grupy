import { db } from "."
import { StudentEntityType } from "../../Domain/Entities/StudentEntity"

const StudentDatasource = () => {
    const getStudentByCourse = async (courseId : string) => {
        try {
            const records = await db.Records.getFullList("students", undefined, {
                filter : `course.id = '${courseId}'`
            })
            const students : StudentEntityType[] = records.map((record : any) => {
                return {
                    id : record.id,
                    studentId : record.studentId,
                    name : record.name,
                    email : record.email,
                    courseId : record.course.id
                }
            })
            return { 
                results : students, 
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

    const createStudent = async (student : StudentEntityType) => {
        try {
            const record = await db.Records.create("students", {
                studentId : student.studentId,
                name : student.name,
                email : student.email,
                course : student.courseId
            })
            return { 
                results : record, 
                error : ""
            }
        }catch(e : any ) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error creating student to course`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const deleteStudent = async (id : string) => {
        try {
            await db.Records.delete("students", id)
            return { 
                results : null, 
                error : ""
            }
        }catch(e : any ) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error creating student to course`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    return {
        getStudentByCourse,
        createStudent,
        deleteStudent        
    }
}

export default StudentDatasource