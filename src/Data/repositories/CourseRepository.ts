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

    const updateCourse = async (course : CourseEntityType) => {
        return await datasource.updateCourse(course)
    }

    return {
        getAllCourses,
        createCourse,
        updateCourse
    }
}

export default CourseRepository