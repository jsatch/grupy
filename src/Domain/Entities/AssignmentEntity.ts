import { StudentEntityType } from "./StudentEntity"

const AssignmentEntity = (name : string, courseId : string, 
    studentsWithoutGroup : StudentEntityType[], id? : string) : AssignmentEntityType => {
    return {
        id : id,
        name : name,
        courseId : courseId,
    }
}

export interface AssignmentEntityType {
    id? : string
    name : string
    courseId : string
}

export default AssignmentEntity