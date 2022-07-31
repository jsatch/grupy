const AssignmentEntity = (name : string, courseId : string, id? : string) : AssignmentEntityType => {
    return {
        id : id,
        name : name,
        courseId : courseId
    }
}

export interface AssignmentEntityType {
    id? : string
    name : string
    courseId : string
}

export default AssignmentEntity