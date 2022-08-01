import CourseRepository from "../../../Data/repositories/CourseRepository"

const viewCourseListUseCase = async () => {
    const courseRepository = CourseRepository()
    return courseRepository.getAllCourses()
}

export default viewCourseListUseCase