import { RequirementCategory } from "./RequirementEntity"
import { StudentEntityType } from "./StudentEntity"

const TaskEntity = (description : string, category : RequirementCategory, complexity : number, 
    assignmentId : string, studentId : string | null, student : StudentEntityType,  groupId: string, 
    id? : string) : TaskEntityType => {
    return {
        id : id,
        description : description,
        category : category,
        complexity : complexity,
        assignmentId : assignmentId,
        studentId : studentId,
        student : student,
        groupId : groupId
    }
}


export interface TaskEntityType {
    id? : string
    description : string
    category : RequirementCategory,
    complexity : number,
    assignmentId : string
    groupId : string
    studentId : string | null
    student : StudentEntityType | null
}

export default TaskEntity