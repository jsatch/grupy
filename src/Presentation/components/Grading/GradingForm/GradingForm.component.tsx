import { Box, Paper, TableBody, TableContainer } from "@mui/material"
import { TaskEntityType } from "../../../../Domain/Entities/TaskEntity"
import GradingTask from "./GradingTask.component"

const GradingForm = (props : GradingFormProps) => {
    return <TableContainer component={Paper} >
        <TableBody>
            {
                props.tasks.map((task : TaskEntityType, index : number) => (
                    <GradingTask index={index} task={task} />
                ))
            }
        </TableBody>
    </TableContainer>
}

interface GradingFormProps {
    tasks : TaskEntityType[]
}

export default GradingForm