import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { CourseEntityType } from "../../../Domain/Entities/CourseEntity"
import StudentEntity, { StudentEntityType } from "../../../Domain/Entities/StudentEntity"
import StudentList from "../Student/StudentList/StudentList.component"

const StudentsPanel = (props : StudentsPanelProps) => {
    const [studentId, setStudentId] = useState("")
    const [studentName, setStudentName] = useState("")
    const [studentEmail, setStudentEmail] = useState("")

    const [studentIdError, setStudentIdError] = useState("")
    const [studentNameError, setStudentNameError] = useState("")
    const [studentEmailError, setStudentEmailError] = useState("")

    const handleStudentIdChange = (evt : any) => {
        setStudentId(evt.target.value)
    }

    const handleStudentNameChange = (evt : any) => {
        setStudentName(evt.target.value)
    }

    const handleStudentEmailChange = (evt : any) => {
        setStudentEmail(evt.target.value)
    }

    const createStudent = () => {
        setStudentIdError("")
        setStudentNameError("")
        setStudentEmailError("")

        if (studentId === "") {
            setStudentIdError("Error. Missing field")
            return
        }

        if (studentId.length < 8 || studentId.length > 12) {
            setStudentIdError("Error. Email needs between 8 and 12 characters")
            return
        }

        if (studentName === "") {
            setStudentNameError("Error. Missing field")
            return
        }

        if (studentEmail === "") {
            setStudentEmailError("Error. Missing field")
            return
        }

        props.onEnrollStudentHandler(StudentEntity(
            studentId, 
            studentName, 
            studentEmail, 
            props.course.id!)
        )

        setStudentId("")
        setStudentName("")
        setStudentEmail("")
    }

    return <Stack>
        <Stack direction="row"
            margin={2}>
            <TextField variant="outlined"
                label="Student ID"
                sx={ { mr : 2 } }
                value={ studentId }
                onChange={ handleStudentIdChange }
                error={ studentIdError !== "" }
                helperText={ studentIdError }/>
            <TextField variant="outlined"
                label="Student Name"
                sx={ { mr : 2 } }
                value={ studentName }
                onChange={ handleStudentNameChange }
                error={ studentNameError !== "" }
                helperText={ studentNameError }/>
            <TextField variant="outlined"
                label="Student Email"
                sx={ { mr : 2 } }
                value={ studentEmail }
                onChange={ handleStudentEmailChange }
                error={ studentEmailError !== "" }
                helperText={ studentEmailError }/>
            <Button variant="contained"
                color="primary"
                size="large"
                onClick={ createStudent }>
                +
            </Button>
        </Stack>
        <StudentList students={ props.students }
            onDeleteStudentHandler={ props.onDeleteStudentsHandler }/>
    </Stack>
}

interface StudentsPanelProps {
    students : StudentEntityType[]
    course : CourseEntityType
    onEnrollStudentHandler : (student : StudentEntityType) => void
    onDeleteStudentsHandler : (studentIds : string[]) => void
}

export default StudentsPanel