import GroupRepository from "../../../Data/repositories/GroupRepository"
import { GroupEntityType } from "../../Entities/GroupEntity"

const updateGroupUseCase = async (group : GroupEntityType) => {
    const groupRepository = GroupRepository()
    return await groupRepository.updateGroup(group)
}

export default updateGroupUseCase