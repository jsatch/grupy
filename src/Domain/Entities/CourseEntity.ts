const CourseEntity = (name : string, term : string, status : CourseEntityStatus, id? : string) : CourseEntityType => {
    return {
        id : id,
        name : name,
        term : term,
        status : status
    }
}

export enum CourseEntityStatus {
    CREATED, ARCHIVED, DELETED
}

export interface CourseEntityType {
    id? : string
    name : string
    term : string
    status : CourseEntityStatus
}

export default CourseEntity