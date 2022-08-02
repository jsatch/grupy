import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import CourseDatasource from "../datasources/CourseDatasource"

const CourseRepository = () => {
    const datasource = CourseDatasource()

    const getAllCourses = async () => {
        return await datasource.getCourses()
    }

    const createCourse = async (course : CourseEntityType) => {
        return await datasource.createCourse(course)
    }

    return {
        getAllCourses,
        createCourse
    }
}

export default CourseRepository