import { MenuItem, TableCell, TableRow, TextField } from "@mui/material"
import { RequirementCategory } from "../../../../Domain/Entities/RequirementEntity"
import { TaskEntityType } from "../../../../Domain/Entities/TaskEntity"

const GradingTask = (props : GradingTaskProps) => {
    return <TableRow>
        <TableCell>{ `R${ props.index + 1 }` }</TableCell>
        <TableCell>{ props.task.description }</TableCell>
        <TableCell>
            {
                props.task.category === RequirementCategory.GRUPAL ? "Group" : "Individual"
            }
        </TableCell>
        <TableCell>{ props.task.complexity }</TableCell>
        <TableCell>{ props.task.student != null ? props.task.student?.name : "-" }</TableCell>
        <TableCell>
            <TextField
                label="Grade"
                select
                InputLabelProps={{
                    shrink: true,
                }}>
                <MenuItem key={0} >
                    0
                </MenuItem>
                <MenuItem key={1} >
                    1
                </MenuItem>
                <MenuItem key={2} >
                    2
                </MenuItem>
                <MenuItem key={3} >
                    3
                </MenuItem>
            </TextField>
        </TableCell>
    </TableRow>
}

interface GradingTaskProps {
    index : number
    task : TaskEntityType
}

export default GradingTask