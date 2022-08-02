import CourseRepository from "../../../Data/repositories/CourseRepository"

const viewCourseListUseCase = async () => {
    const courseRepository = CourseRepository()
    return await courseRepository.getAllCourses()
}

export default viewCourseListUseCase