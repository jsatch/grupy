import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const StudentList = (props : StudentListProps) => {

    const columns : GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'studentId', headerName: 'Student Id', flex : 1 },
        { field: 'name', headerName: 'Name', flex : 3 },
        { field: 'email', headerName: 'Email', flex : 3 }
    ]

    return  <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={props.students}
            columns={columns}
            checkboxSelection={true}
            disableSelectionOnClick={true}
        />
     </Box>
}

interface Student {
    id : string
    studentId : string
    name : string
    email : string
}

interface StudentListProps {
    students : Student[]
}

export default StudentList