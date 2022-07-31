import { Box } from "@mui/system"
import AssignmentList from "../Assignment/AssignmentList/AssignmentList.component"

const AssignmentsPanel = (props : AssignmentsPanelProps) => {
    const assignments = [
        { id : "1", name : "Asignacion 1"},
        { id : "2", name : "Asignacion 2"},
        { id : "3", name : "Asignacion 1"},
        { id : "4", name : "Asignacion 2"},
        { id : "5", name : "Asignacion 1"},
        { id : "6", name : "Asignacion 2"}
    ]
    return <Box sx={ {mt : 2 } }>
        <AssignmentList assignments={assignments} />
    </Box>
}

interface AssignmentsPanelProps {

}

export default AssignmentsPanel