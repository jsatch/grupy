import { StudentEntityType } from "../../Domain/Entities/StudentEntity"
import StudentDatasource from "../datasources/StudentDatasource"

const StudentRepository = () => {
    const datasource = StudentDatasource()
    
    const getStudentsByCourse = async (courseId : string) => {
        return await datasource.getStudentByCourse(courseId)
    }

    const enrollStudent = async (student : StudentEntityType) => {
        return await datasource.createStudent(student)
    }

    const deleteStudent = async (id : string) => {
        return await datasource.deleteStudent(id)
    }

    return {
        getStudentsByCourse,
        enrollStudent,
        deleteStudent
    }
}

export default StudentRepository