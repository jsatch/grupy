import CourseDatasource from "../datasources/CourseDatasource"

const CourseRepository = () => {
    const datasource = CourseDatasource()

    const getAllCourses = async () => {
        return await datasource.getCourses()
    }

    return {
        getAllCourses
    }
}

export default CourseRepository