import StudentRepository from "../../../Data/repositories/StudentRepository"

const deleteStudentUseCase = async (id : string) => {
    const studentRepository = StudentRepository()
    return await studentRepository.deleteStudent(id)
}

export default deleteStudentUseCase