import { db } from "."
import { RequirementEntityType } from "../../Domain/Entities/RequirementEntity"

const RequirementDatasource = () => {
    const getRequirementsByAssignment = async (assignmentId : string) => {
        try {
            const records = await db.Records.getFullList("requirements", undefined, {
                filter : `assignment.id = '${assignmentId}'`
            })
            const requirements : RequirementEntityType[] = records.map((record : any) => {
                return {
                    id : record.id,
                    description : record.description,
                    category : record.category,
                    complexity : record.complexity,
                    assignmentId : assignmentId
                }
            })
            return { 
                results : requirements, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error getting requirements from course ${assignmentId}`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const createRequirement = async (requirement : RequirementEntityType) => {
        try {
            const record = await db.Records.create("requirements", {
                description : requirement.description,
                category : requirement.category,
                complexity : requirement.complexity,
                assignment : requirement.assignmentId
            })
            return { 
                results : {
                    id : record.id,
                    description : record.description,
                    category : record.category,
                    complexity : record.complexity,
                    assignmentId : record.assignment.id
                }, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error creating requirements`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const updateRequirement = async (requirement : RequirementEntityType) => {
        try {
            const record = await db.Records.update("requirements", requirement.id!, {
                description : requirement.description,
                category : requirement.category,
                complexity : requirement.complexity,
                assignment : requirement.assignmentId
            })
            return { 
                results : {
                    id : record.id,
                    description : record.description,
                    category : record.category,
                    complexity : record.complexity,
                    assignmentId : record.assignment.id
                } , 
                error :  ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error updating requirements`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    const deleteRequirement = async (requirementId : string) => {
        try {
            await db.Records.delete("requirements", requirementId)
            return { 
                results : null, 
                error : ""
            }
        }catch(e : any) {
            if (e.status !== 0) {
                console.error("Error:", e.data)
                console.error("Error:", e.originalError)
                return { results : null , error : `Error deleting requirements`}
            }else {
                return { results : [] , error :  ""}
            }
        }
    }

    return {
        getRequirementsByAssignment,
        createRequirement,
        updateRequirement,
        deleteRequirement
    }
}

export default RequirementDatasource