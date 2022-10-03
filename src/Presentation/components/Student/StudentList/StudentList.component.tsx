import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { StudentEntityType } from '../../../../Domain/Entities/StudentEntity';

const StudentList = (props : StudentListProps) => {

    const columns : GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'studentId', headerName: 'Student Id', flex : 1 },
        { field: 'name', headerName: 'Name', flex : 3 },
        { field: 'email', headerName: 'Email', flex : 3 }
    ]

    const [studentSelection, setStudentSelection] = useState<GridSelectionModel>([])

    return  <Box sx={{ height: 400, width: '100%' }}>
        <Button variant="contained"
                sx={ { margin : 2}}
                color="primary"
                onClick={ () => {
                    props.onDeleteStudentHandler(studentSelection as string[])
                }}>
                Remove
        </Button>
        <DataGrid
            rows={props.students}
            columns={columns}
            checkboxSelection={true}
            disableSelectionOnClick={true}
            onSelectionModelChange={ (newSelectionModel) => {
                setStudentSelection(newSelectionModel)
            } }
            selectionModel={ studentSelection }
        />
     </Box>
}

interface StudentListProps {
    students : StudentEntityType[]
    onDeleteStudentHandler : (studentsId : string[]) => void 
}

export default StudentList