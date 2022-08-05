import GroupDatasource from "../datasources/GroupDatasource"

const GroupRepository = () => {
    const datasource = GroupDatasource()

    const getGroupsByAssignmentId = async(assignmentId : string) => {
        return await datasource.getGroupsByAssignment(assignmentId)
    }

    return {
        getGroupsByAssignmentId
    }
}

export default GroupRepository