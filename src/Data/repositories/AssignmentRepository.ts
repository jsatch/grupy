import { AssignmentEntityType } from "../../Domain/Entities/AssignmentEntity"
import AssignmentDatasource from "../datasources/AssignmentDatasource"

const AssignmentRepository = () => {
    const datasource = AssignmentDatasource()

    const getAssignmentsByCourseId = async (courseId : string) => {
        return await datasource.getAssignments(courseId)
    }

    const createAssignment = async (assignment : AssignmentEntityType) => {
        return await datasource.createAssignment(assignment)
    }

    return {
        getAssignmentsByCourseId,
        createAssignment
    }
}

export default AssignmentRepository