import GroupRepository from "../../../Data/repositories/GroupRepository"
import { GroupEntityType } from "../../Entities/GroupEntity"

const deleteGroupUseCase = async (groupId : string) => {
    const groupRepository = GroupRepository()
    return await groupRepository.deleteGroup(groupId)
}

export default deleteGroupUseCase