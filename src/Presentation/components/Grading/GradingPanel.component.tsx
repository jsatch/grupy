import { Box, Button, IconButton, Stack } from "@mui/material"
import UploadIcon from "@mui/icons-material/Upload"
import GradingForm from "./GradingForm/GradingForm.component"
import { TaskEntityType } from "../../../Domain/Entities/TaskEntity"

const GradingPanel = (props : GradingPanelProps) => {
    return <>
        <Box sx={ {mt:1, mb: 1 } }>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="primary" component="label">
                    <input hidden accept="image/*" type="file" />
                    <UploadIcon />
                </IconButton>
            </Stack>
        </Box>
        <GradingForm tasks={props.tasks}/>
    </>
}

interface GradingPanelProps {
    tasks : TaskEntityType[]
}

export default GradingPanel