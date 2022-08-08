import { RequirementCategory } from "./RequirementEntity"
import { StudentEntityType } from "./StudentEntity"

const TaskEntity = (description : string, category : RequirementCategory, complexity : number,  grade : number,
    assignmentId : string, studentId : string | null, student : StudentEntityType,  groupId: string, 
    id? : string) : TaskEntityType => {
    return {
        id : id,
        description : description,
        category : category,
        complexity : complexity,
        grade : grade,
        assignmentId : assignmentId,
        student : student,
        groupId : groupId
    }
}


export interface TaskEntityType {
    id? : string
    description? : string
    category? : RequirementCategory,
    complexity? : number,
    grade : number
    assignmentId : string
    groupId : string
    student? : StudentEntityType | null
}

export default TaskEntity