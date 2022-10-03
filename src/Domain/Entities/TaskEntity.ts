import { RequirementCategory, RequirementEntityType } from "./RequirementEntity"
import { StudentEntityType } from "./StudentEntity"

const TaskEntity = (description : string, category : RequirementCategory, complexity : number,  grade : number,
    assignmentId : string, studentId : string, student : StudentEntityType,  groupId: string, requirementId : string, requirement : RequirementEntityType,
    id? : string) : TaskEntityType => {
    return {
        id : id,
        description : description,
        category : category,
        complexity : complexity,
        grade : grade,
        assignmentId : assignmentId,
        requirementId : requirementId,
        requirement : requirement,
        studentId : studentId,
        student : student,
        groupId : groupId
    }
}


export interface TaskEntityType {
    id? : string
    description? : string
    category? : RequirementCategory
    complexity? : number
    grade : number
    assignmentId : string
    groupId : string
    requirementId : string
    requirement? : RequirementEntityType
    studentId : string
    student? : StudentEntityType | null
}

export default TaskEntity