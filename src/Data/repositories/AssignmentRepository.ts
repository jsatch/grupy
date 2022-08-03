import AssignmentDatasource from "../datasources/AssignmentDatasource"

const AssignmentRepository = () => {
    const datasource = AssignmentDatasource()

    const getAssignmentsByCourseId = async (courseId : string) => {
        return await datasource.getAssignments(courseId)
    }

    return {
        getAssignmentsByCourseId
    }
}

export default AssignmentRepository