import { useState } from "react"
import { GroupEntityType } from "../../Domain/Entities/GroupEntity"
import { RequirementEntityType } from "../../Domain/Entities/RequirementEntity"
import { StudentEntityType } from "../../Domain/Entities/StudentEntity"
import createGroupUseCase from "../../Domain/UseCases/Group/CreateGroup"
import deleteGroupUseCase from "../../Domain/UseCases/Group/DeleteGroup"
import updateGroupUseCase from "../../Domain/UseCases/Group/UpdateGroup"
import viewGroupsFromAssignmentUseCase from "../../Domain/UseCases/Group/ViewGroupsFromAssignment"
import createRequirementUseCase from "../../Domain/UseCases/Requirement/CreateRequirement"
import deleteRequirementUseCase from "../../Domain/UseCases/Requirement/DeleteRequirement"
import updateRequirementUseCase from "../../Domain/UseCases/Requirement/UpdateRequirement"
import viewRequirementsFromAssignmentUseCase from "../../Domain/UseCases/Requirement/ViewRequirementsFromAssignment"
import viewStudentsFromCourseUseCase from "../../Domain/UseCases/Student/ViewStudentsFromCourse"

const AssignmentPageViewModel = () => {
    const [error, setError] = useState("")
    const [requirements, setRequirements] = useState<RequirementEntityType[]>([])
    const [groups, setGroups] = useState<GroupEntityType[]>([])
    const [students, setStudents] = useState<StudentEntityType[]>([])
    const [showGroupModal, setShowGroupModal] = useState(false)

    const getRequirementsByAssignmentId = async (assignmentId : string) => {
        const {results, error} = await viewRequirementsFromAssignmentUseCase(assignmentId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setRequirements(results!)
        }
    }

    const createRequirement = async(requirement : RequirementEntityType) => {
        const {error} = await createRequirementUseCase(requirement)
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getRequirementsByAssignmentId(requirement.assignmentId)
        }
    }

    const updateRequirement = async(requirement : RequirementEntityType) => {
        const {error} = await updateRequirementUseCase(requirement)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getRequirementsByAssignmentId(requirement.assignmentId)
        }
    }

    const deleteRequirement = async(requirementId : string, assignmentId : string) => {
        const {error} = await deleteRequirementUseCase(requirementId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getRequirementsByAssignmentId(assignmentId)
        }
    }

    const getGroupsByAssignmentId = async (assignmentId : string) => {
        const {results, error} = await viewGroupsFromAssignmentUseCase(assignmentId)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setGroups(results!)
        }
    }

    const createGroup = async (group : GroupEntityType) => {
        const {error} = await createGroupUseCase(group)
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setShowGroupModal(false)
            getGroupsByAssignmentId(group.assignmentId)
        }
    }

    const updateGroup = async ( group : GroupEntityType) => {
        const {error} = await updateGroupUseCase(group)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getGroupsByAssignmentId(group.assignmentId)
        }
    }

    const deleteGroup = async (group : GroupEntityType) => {
        const {error} = await deleteGroupUseCase(group.id!)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            getGroupsByAssignmentId(group.assignmentId)
        }
    }

    const getStudentsByCourse = async (courseId : string) => {
        const {results, error} = await viewStudentsFromCourseUseCase(courseId)
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setStudents(results!)
        }
    }

    return {
        error,
        requirements,
        groups,
        students,
        showGroupModal,
        getRequirementsByAssignmentId,
        createRequirement,
        updateRequirement,
        deleteRequirement,
        getGroupsByAssignmentId,
        createGroup,
        updateGroup,
        deleteGroup,
        getStudentsByCourse,
        setShowGroupModal
    }

    
}

export default AssignmentPageViewModel