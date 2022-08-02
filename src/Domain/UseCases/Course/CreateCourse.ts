import CourseRepository from "../../../Data/repositories/CourseRepository"
import { CourseEntityType } from "../../Entities/CourseEntity"

const createCourseUseCase = async(course : CourseEntityType) => {
    const courseRepository = CourseRepository()
    return await courseRepository.createCourse(course)
}

export default createCourseUseCase