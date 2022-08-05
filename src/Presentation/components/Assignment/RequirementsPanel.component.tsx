import { RequirementEntityType } from "../../../Domain/Entities/RequirementEntity"
import RequirementList from "../Requirement/RequirementList/RequirementList.component"


const RequirementsPanel = (props : RequirementPanelProps) => {
    return <>
        <RequirementList requirements={props.requirements}/>
    </>
}

interface RequirementPanelProps {
    requirements : RequirementEntityType[]
}

export default RequirementsPanel