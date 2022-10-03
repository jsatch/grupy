import GroupRepository from "../../../Data/repositories/GroupRepository"


const viewGroupsFromAssignmentUseCase = async (assignmentId : string)=> {
    const groupRepository = GroupRepository()
    return await groupRepository.getGroupsByAssignmentId(assignmentId)
}

export default viewGroupsFromAssignmentUseCase