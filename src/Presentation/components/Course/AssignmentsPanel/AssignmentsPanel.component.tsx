import { Button } from "@mui/material"
import { Box } from "@mui/system"
import { AssignmentEntityType } from "../../../../Domain/Entities/AssignmentEntity"
import { CourseEntityType } from "../../../../Domain/Entities/CourseEntity"
import AssignmentList from "../../Assignment/AssignmentList/AssignmentList.component"
import AssignmentModal, { AssignmentModalMode } from "./AssignmentModal.component"

const AssignmentsPanel = (props : AssignmentsPanelProps) => {


    return <Box sx={ {mt : 2 } }>
        <Button variant="contained"
            color="primary"
            sx={ { mb : 2 } }
            onClick={ props.openAssignmentModal }>
            Create
        </Button>
        <AssignmentList 
            assignments={props.assignments}
            onSelectAssignmentHandler={ props.onSelectAssignmentHandler }
            onGradeHandler={ props.onGradeHandler }
             />
        {
            (() => {
                if (props.showAssignmentModal) {
                    return <AssignmentModal 
                        show={props.showAssignmentModal}
                        mode={ AssignmentModalMode.Add }
                        onCreateAssignmentHandler={ props.onCreateAssignmentHandler }
                        onUpdateAssignmentHandler={ props.onUpdateAssignmentHandler }
                        course={ props.course }
                        assignment={ null }
                        onCloseHandler={ props.onCloseHandler }/>
                }
            })()
        }
    </Box>
}

interface AssignmentsPanelProps {
    assignments : AssignmentEntityType[]
    showAssignmentModal : boolean
    course : CourseEntityType
    openAssignmentModal : () => void
    onCreateAssignmentHandler : (assignment : AssignmentEntityType) => void
    onUpdateAssignmentHandler : (assignment : AssignmentEntityType) => void
    onSelectAssignmentHandler : (assignment : AssignmentEntityType) => void
    onGradeHandler : (assignment : AssignmentEntityType) => void
    onCloseHandler : () => void
}

export default AssignmentsPanel