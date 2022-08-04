import { Alert, Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { AssignmentEntityType } from "../../../../Domain/Entities/AssignmentEntity";
import { CourseEntityType } from "../../../../Domain/Entities/CourseEntity";

export enum AssignmentModalMode {
    Add, Edit
}

const AssignmentModal = (props : AssignmentModalProps) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [assignmentName, setAssignmentName] = useState(props.mode ===  AssignmentModalMode.Edit ? props.assignment!.name : "")
    const [error, setError] = useState("")

    const handleAssignmentNameChange = (evt : any) => {
        setAssignmentName(evt.target.value)
    }

    const saveAssignment = () => {
        if (assignmentName === ""){
            setError("Fill all the empty fields")
            return
        }

        if (props.mode === AssignmentModalMode.Add) {
            props.onCreateAssignmentHandler({
                name : assignmentName,
                courseId : props.course.id!
            })
        }else {
            props.onUpdateAssignmentHandler({
                id : props.assignment!.id!,
                name : assignmentName,
                courseId : props.course.id!
            })
        }

        setError("")
        setAssignmentName("")
    }

    return <Modal open={props.show}
        onClose={props.onCloseHandler}>
        <Box sx={style}>
            <Typography variant="h5" component="h2">
                { props.mode === AssignmentModalMode.Add ? "Add Assignment" : "Edit Assignment" }
            </Typography>
            <Stack>
                <TextField required
                    label={"Course Name"}
                    margin="dense"
                    value={ assignmentName }
                    onChange={ handleAssignmentNameChange }
                />
                <Stack direction="row" spacing={2} mt={2}
                    alignItems="center" justifyContent="center">
                    <Button variant="contained" color="primary"
                        onClick={ saveAssignment }>
                        { props.mode === AssignmentModalMode.Add ? "Save" : "Update" }
                    </Button>
                    <Button variant="contained" color="primary"
                        onClick={() => {
                            setAssignmentName("")
                            props.onCloseHandler()
                        }}>
                        Cancel
                    </Button>
                </Stack>
                {
                    (()=> {
                        if (error !== "") {
                            return <Alert severity="error">{ error }</Alert>
                        }
                    })()
                }
                
            </Stack>
        </Box>
    </Modal>
}

interface AssignmentModalProps {
    show : boolean
    mode : AssignmentModalMode
    course : CourseEntityType
    assignment : AssignmentEntityType | null
    onCloseHandler: () => void
    onCreateAssignmentHandler : (assignment : AssignmentEntityType) => void
    onUpdateAssignmentHandler : (assignment : AssignmentEntityType) => void
}

export default AssignmentModal