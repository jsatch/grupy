import { Button, Stack, TextField } from "@mui/material"
import { StudentEntityType } from "../../../Domain/Entities/StudentEntity"
import StudentList from "../Student/StudentList/StudentList.component"

const StudentsPanel = (props : StudentsPanelProps) => {
    return <Stack>
        <Stack direction="row"
            margin={2}>
            <TextField variant="outlined"
                label="Student ID"
                sx={ { mr : 2 } }/>
            <TextField variant="outlined"
                label="Student Name"
                sx={ { mr : 2 } }/>
            <TextField variant="outlined"
                label="Student Email"
                sx={ { mr : 2 } }/>
            <Button variant="contained"
                color="primary"
                size="large">
                +
            </Button>
        </Stack>
        <Stack direction="row">
            <Button variant="contained"
                sx={ { margin : 2}}
                color="primary">
                Remove
            </Button>
        </Stack>
        <StudentList students={ props.students }/>
    </Stack>
}

interface StudentsPanelProps {
    students : StudentEntityType[]
}

export default StudentsPanel