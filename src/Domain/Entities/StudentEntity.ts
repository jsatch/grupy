const StudentEntity = (studentId : string, name : string, email : string, id? : string) : StudentEntityType => {
    return {
        id : id,
        studentId : studentId,
        name : name,
        email : email
    }
}

export interface StudentEntityType {
    id? : string
    studentId : string
    name : string
    email : string
}

export default StudentEntity