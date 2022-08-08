import { GroupEntityType } from "../../Domain/Entities/GroupEntity"
import GroupDatasource from "../datasources/GroupDatasource"

const GroupRepository = () => {
    const datasource = GroupDatasource()

    const getGroupsByAssignmentId = async(assignmentId : string) => {
        return await datasource.getGroupsByAssignment(assignmentId)
    }

    const createGroup = async (group : GroupEntityType) => {
        return await datasource.createGroup(group)
    }

    const updateGroup = async (group : GroupEntityType) => {
        return await datasource.updateGroup (group)
    }

    const deleteGroup = async (groupId : string) => {
        return await datasource.deleteGroup(groupId)
    }

    return {
        getGroupsByAssignmentId,
        createGroup,
        updateGroup,
        deleteGroup
    }
}

export default GroupRepository