import StudentDatasource from "../datasources/StudentDatasource"

const StudentRepository = () => {
    const datasource = StudentDatasource()
    
    const getStudentsByCourse = async (courseId : string) => {
        return await datasource.getStudentByCourse(courseId)
    }

    return {
        getStudentsByCourse
    }
}

export default StudentRepository