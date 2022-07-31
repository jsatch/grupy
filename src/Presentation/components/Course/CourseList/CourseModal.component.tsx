import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";

export enum CourseModalMode {
    Add, Edit
}

const CourseModal = (props: CourseModalProps) => {
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

    const [courseName, setCourseName] = useState("")
    const [courseTerm, setCourseTerm] = useState("")

    const handleCourseNameChange = (evt : any) => {
        setCourseName(evt.target.value)
    }

    const handleCourseTermChange = (evt : any) => {
        setCourseTerm(evt.target.value)
    }

    return <Modal open={props.show}
        onClose={props.onCloseHandler}>
        <Box sx={style}>
            <Typography variant="h5" component="h2">
                { props.mode === CourseModalMode.Add ? "Add Course" : "Edit Course" }
            </Typography>
            <Stack>
                <TextField required
                    label={"Course Name"}
                    margin="dense"
                    value={courseName}
                    onChange={ handleCourseNameChange }
                />
                <TextField required
                    label={"Term"}
                    margin="dense"
                    value={ courseTerm }
                    onChange={ handleCourseTermChange } />
                <Stack direction="row" spacing={2} mt={2}
                    alignItems="center" justifyContent="center">
                    <Button variant="contained" color="primary">
                    { props.mode === CourseModalMode.Add ? "Save" : "Update" }
                    </Button>
                    <Button variant="contained" color="primary"
                        onClick={() => {
                            setCourseName("")
                            setCourseTerm("")
                            props.onCloseHandler()
                        }}>
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </Box>
    </Modal>
}



interface CourseModalProps {
    show: boolean
    mode : CourseModalMode
    onCloseHandler: () => void
}

export default CourseModal