import StudentRepository from "../../../Data/repositories/StudentRepository";
import { StudentEntityType } from "../../Entities/StudentEntity";

const createStudentUseCase = async (student : StudentEntityType) => {
    const studentRepository = StudentRepository()
    return await studentRepository.enrollStudent(student)
}

export default createStudentUseCase