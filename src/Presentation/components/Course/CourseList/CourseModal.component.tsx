import { Alert, Box, Button, Modal, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { CourseEntityStatus, CourseEntityType } from "../../../../Domain/Entities/CourseEntity";

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

    const [courseName, setCourseName] = useState(props.mode ===  CourseModalMode.Edit ? props.course!.name : "")
    const [courseTerm, setCourseTerm] = useState(props.mode ===  CourseModalMode.Edit ? props.course!.term : "")
    const [error, setError] = useState("")

    const handleCourseNameChange = (evt : any) => {
        setCourseName(evt.target.value)
    }

    const handleCourseTermChange = (evt : any) => {
        setCourseTerm(evt.target.value)
    }

    const saveCourse = () => {
        if (courseName === "" || courseTerm === "") {
            setError("Fill all the empty fields")
            return
        }

        if (courseTerm.length <= 5) {
            setError("Term must be +5 characters")
            return
        }

        if (props.mode === CourseModalMode.Add) {
            props.onCreateCourseHandler({
                name : courseName,
                term : courseTerm,
                status : CourseEntityStatus.CREATED
            })
        }else {
            props.onUpdateCourseHandler({
                id : props.course?.id,
                name : courseName,
                term : courseTerm,
                status : CourseEntityStatus.CREATED
            })
        }

        setError("")
        setCourseName("")
        setCourseTerm("")
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
                    <Button variant="contained" color="primary"
                        onClick={ saveCourse }>
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



interface CourseModalProps {
    show: boolean
    mode : CourseModalMode
    course : CourseEntityType | null
    onCloseHandler: () => void
    onCreateCourseHandler : (course : CourseEntityType) => void
    onUpdateCourseHandler : (course : CourseEntityType) => void
}

export default CourseModal