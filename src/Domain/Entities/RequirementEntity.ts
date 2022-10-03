const RequirementEntity = (description : string, category : RequirementCategory, complexity : number, 
    assignmentId : string, id? : string) : RequirementEntityType => {
    return {
        id : id,
        description : description,
        category : category,
        complexity : complexity,
        assignmentId : assignmentId
    }
}

export enum RequirementCategory {
    GRUPAL, INDIVIDUAL
}

export interface RequirementEntityType {
    id? : string
    description : string
    category : RequirementCategory,
    complexity : number,
    assignmentId : string
}

export default RequirementEntity