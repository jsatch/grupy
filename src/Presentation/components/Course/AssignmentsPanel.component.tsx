import { Box } from "@mui/system"
import { AssignmentEntityType } from "../../../Domain/Entities/AssignmentEntity"
import AssignmentList from "../Assignment/AssignmentList/AssignmentList.component"

const AssignmentsPanel = (props : AssignmentsPanelProps) => {

    return <Box sx={ {mt : 2 } }>
        <AssignmentList assignments={props.assignments} />
    </Box>
}

interface AssignmentsPanelProps {
    assignments : AssignmentEntityType[]
}

export default AssignmentsPanel