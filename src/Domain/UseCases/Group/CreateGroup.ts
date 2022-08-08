import GroupRepository from "../../../Data/repositories/GroupRepository";
import { GroupEntityType } from "../../Entities/GroupEntity";

const createGroupUseCase = async (group : GroupEntityType) => {
    const groupRepository = GroupRepository()
    return await groupRepository.createGroup(group)
}

export default createGroupUseCase