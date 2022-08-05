import { AssignmentEntityType } from "../../../Domain/Entities/AssignmentEntity"
import { RequirementEntityType } from "../../../Domain/Entities/RequirementEntity"
import RequirementList from "../Requirement/RequirementList/RequirementList.component"


const RequirementsPanel = (props : RequirementPanelProps) => {
    return <>
        <RequirementList requirements={props.requirements}
            assignment={ props.assignment }
            onCreateRequirementHandler={ props.onCreateRequirementHandler }
            onUpdateRequirementHandler={ props.onUpdateRequirementHandler }
            onDeleteRequirementHandler={ props.onDeleteRequirementHandler }/>
    </>
}

interface RequirementPanelProps {
    requirements : RequirementEntityType[]
    assignment : AssignmentEntityType
    onCreateRequirementHandler : (requirement : RequirementEntityType) => void
    onUpdateRequirementHandler : (requirement : RequirementEntityType) => void
    onDeleteRequirementHandler : (requirementId : string, assignmentId : string) => void

}

export default RequirementsPanel