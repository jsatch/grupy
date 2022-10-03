const StudentEntity = (studentId : string, name : string, email : string, 
        courseId: string, id? : string) : StudentEntityType => {
    return {
        id : id,
        studentId : studentId,
        name : name,
        email : email,
        courseId : courseId
    }
}

export interface StudentEntityType {
    id? : string
    studentId : string
    name : string
    email : string
    courseId : string
}

export default StudentEntity