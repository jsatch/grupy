import { MenuItem, TableCell, TableRow, TextField } from "@mui/material"
import { RequirementCategory } from "../../../../Domain/Entities/RequirementEntity"
import { StudentEntityType } from "../../../../Domain/Entities/StudentEntity"
import { TaskEntityType } from "../../../../Domain/Entities/TaskEntity"

const GradingTask = (props : GradingTaskProps) => {

    const handleStudentChange = (event : any) => {
        props.onUpdateTask({
            ...props.task,
            studentId : event.target.value
        })
    }

    const handleGradeChange = (event : any) => {
        props.onUpdateTask({
            ...props.task,
            grade : event.target.value
        })
    }

    return <TableRow>
        <TableCell>{ `R${ props.index + 1 }` }</TableCell>
        <TableCell>{ props.task.requirement!.description }</TableCell>
        <TableCell>
            {
                props.task.requirement!.category === RequirementCategory.GRUPAL ? "Group" : "Individual"
            }
        </TableCell>
        <TableCell>{ props.task.requirement!.complexity }</TableCell>
        <TableCell>
            {
                (()=>{
                    if (props.task.requirement!.category === RequirementCategory.GRUPAL) {
                        return "-"
                    }else {
                        return <TextField
                                label="Student"
                                select
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={ props.task.studentId === "" ? "0" : props.task.studentId }
                                onChange={ handleStudentChange }>
                            <MenuItem key="0" value={ "0" }>-</MenuItem>
                            {
                                props.studentsInGroup.map((student : StudentEntityType) => {
                                    return <MenuItem key={ student.id! } value={ student.id! }>
                                        { student.name }
                                    </MenuItem>
                                })
                            }
                        </TextField>
                    }
                })()
            }
            
        </TableCell>
        <TableCell>
            <TextField
                label="Grade"
                select
                InputLabelProps={{
                    shrink: true,
                }}
                value={ props.task.grade }
                onChange={ handleGradeChange }>
                <MenuItem key={0} value={ 0 }>
                    0
                </MenuItem>
                <MenuItem key={1} value={ 1 }>
                    1
                </MenuItem>
                <MenuItem key={2} value={ 2 }>
                    2
                </MenuItem>
                <MenuItem key={3} value={ 3 }>
                    3
                </MenuItem>
                <MenuItem key={4} value={ 4 }>
                    4
                </MenuItem>
            </TextField>
        </TableCell>
    </TableRow>
}

interface GradingTaskProps {
    index : number
    task : TaskEntityType
    studentsInGroup : StudentEntityType[]
    onUpdateTask : (task : TaskEntityType) => void
}

export default GradingTask