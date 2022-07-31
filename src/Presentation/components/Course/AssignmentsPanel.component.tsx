import { Box } from "@mui/system"
import { AssignmentEntityType } from "../../../Domain/Entities/AssignmentEntity"
import AssignmentList from "../Assignment/AssignmentList/AssignmentList.component"

const AssignmentsPanel = (props : AssignmentsPanelProps) => {
    const assignments : AssignmentEntityType[] = [
        { id : "1", name : "Asignacion 1", courseId: "1"},
        { id : "2", name : "Asignacion 2", courseId: "1"},
        { id : "3", name : "Asignacion 1", courseId: "1"},
        { id : "4", name : "Asignacion 2", courseId: "1"},
        { id : "5", name : "Asignacion 1", courseId: "1"},
        { id : "6", name : "Asignacion 2", courseId: "1"}
    ]
    return <Box sx={ {mt : 2 } }>
        <AssignmentList assignments={assignments} />
    </Box>
}

interface AssignmentsPanelProps {

}

export default AssignmentsPanel