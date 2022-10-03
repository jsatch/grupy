import CourseRepository from "../../../Data/repositories/CourseRepository"
import { CourseEntityType } from "../../Entities/CourseEntity"

const editCourseUseCase = async(course : CourseEntityType) => {
    const courseRepository = CourseRepository()
    return await courseRepository.updateCourse(course)
}

export default editCourseUseCase