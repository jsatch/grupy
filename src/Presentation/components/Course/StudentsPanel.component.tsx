import { Button, Stack } from "@mui/material"
import StudentList from "../Student/StudentList/StudentList.component"

const StudentsPanel = (props : StudentsPanelProps) => {
    const students = [
        { 
            id : "1",
            studentId : "20202323",
            name : "Juan Diego Quintana",
            email : "20202323@aloe.ulima.edu.pe"
        },
        { 
            id : "2",
            studentId : "20202323",
            name : "Juan Diego Quintana",
            email : "20202323@aloe.ulima.edu.pe"
        },
        { 
            id : "3",
            studentId : "20202323",
            name : "Juan Diego Quintana",
            email : "20202323@aloe.ulima.edu.pe"
        },
        { 
            id : "4",
            studentId : "20202323",
            name : "Juan Diego Quintana",
            email : "20202323@aloe.ulima.edu.pe"
        },
        { 
            id : "5",
            studentId : "20202323",
            name : "Juan Diego Quintana",
            email : "20202323@aloe.ulima.edu.pe"
        }
    ]
    return <>
        <Stack direction="row">
            <Button variant="contained"
                sx={ { margin : 2}}
                color="primary">
                Add
            </Button>
            <Button variant="contained"
                sx={ { margin : 2}}
                color="primary">
                Remove
            </Button>
        </Stack>
        <StudentList students={students}/>
    </>
}

interface StudentsPanelProps {
    
}

export default StudentsPanel