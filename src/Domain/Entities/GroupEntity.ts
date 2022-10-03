import { StudentEntityType } from "./StudentEntity"

const GroupEntity = (name : string, number : number, assignmentId : string, 
    students : StudentEntityType[], id? : string) : GroupEntityType => {
    return {
        id : id,
        name : name,
        number : number,
        assignmentId : assignmentId,
        students : students
    }
}

export interface GroupEntityType {
    id? : string
    name : string
    number : number
    assignmentId : string
    students : StudentEntityType[]
}

export default GroupEntity