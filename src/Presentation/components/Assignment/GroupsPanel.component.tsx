import { Box, Button, Stack } from "@mui/material"
import { useState } from "react"
import GroupList from "../Group/GroupList/GroupList.component"
import GroupModal from "../Group/GroupList/GroupModal.component"

const GroupsPanel = () => {
    const groups = [
        { 
            id : "1", name : "Grupo 1", number : 1, assignmentId : "1",
            students : [
                { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
                { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
            ]
        },
        { id : "2", name : "Grupo 2", number : 2, assignmentId : "1", students : [] }
    ]

    const students =  [
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
    ]

    const [showGroupModal, setShowGroupModal] = useState(true)

    return <Stack sx={ {mt : 2 } }>
        <Box sx={ { mb : 2 }}>
            <Button variant="contained" color="primary">
                Add
            </Button>
        </Box>
        <GroupList groups={groups}/>
        <GroupModal show={showGroupModal} 
            onCloseHandler={ () =>  setShowGroupModal(false)} 
            studentsLeft={ students }
            studentsInGroup={ [] }/>
    </Stack>
}

export default GroupsPanel