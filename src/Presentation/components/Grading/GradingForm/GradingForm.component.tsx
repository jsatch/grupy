import { Box, Paper, TableBody, TableContainer } from "@mui/material"
import { StudentEntityType } from "../../../../Domain/Entities/StudentEntity"
import { TaskEntityType } from "../../../../Domain/Entities/TaskEntity"
import GradingTask from "./GradingTask.component"

const GradingForm = (props : GradingFormProps) => {
    return <TableContainer component={Paper} >
        <TableBody>
            {
                props.tasks.map((task : TaskEntityType, index : number) => (
                    <GradingTask index={index} 
                        key={ task.id! }
                        task={task}
                        studentsInGroup={ props.studentsInGroup }
                        onUpdateTask={ props.onUpdateTask } />
                ))
            }
        </TableBody>
    </TableContainer>
}

interface GradingFormProps {
    tasks : TaskEntityType[]
    studentsInGroup : StudentEntityType[]
    onUpdateTask : (task : TaskEntityType) => void
}

export default GradingForm