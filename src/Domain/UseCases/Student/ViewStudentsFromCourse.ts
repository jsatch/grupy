import StudentRepository from "../../../Data/repositories/StudentRepository"

const viewStudentsFromCourseUseCase = async (courseId : string) => {
    const studentRepository = StudentRepository()
    return await studentRepository.getStudentsByCourse(courseId)
}

export default viewStudentsFromCourseUseCase