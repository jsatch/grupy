import { PropaneSharp } from "@mui/icons-material";
import { Box, Button, Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, Modal, Paper, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { GroupEntityType } from "../../../../Domain/Entities/GroupEntity";
import { StudentEntityType } from "../../../../Domain/Entities/StudentEntity";

const not = (a: readonly StudentEntityType[], b: readonly StudentEntityType[]) => {
    return a.filter((value) => b.indexOf(value) === -1);
}

const intersection = (a: readonly StudentEntityType[], b: readonly StudentEntityType[]) => {
    return a.filter((value) => b.indexOf(value) !== -1);
}

const GroupModal = (props: GroupModalProps) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [checked, setChecked] = useState<readonly StudentEntityType[]>([]);
    const [left, setLeft] = useState<StudentEntityType[]>(props.studentsLeft);
    const [right, setRight] = useState<StudentEntityType[]>([])
    const [groupName, setGroupName] = useState("")
    const [groupNameError, setGroupNameError] = useState("")

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleGroupNameChange = (event: any) => {
        setGroupName(event.target.value)
    }

    const handleToggle = (value: StudentEntityType) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const saveGroup = () => {
        if (groupName === "")
        {
            setGroupNameError("Error. Missing field")
            return
        }
        props.onSaveGroupHandler({
            name : groupName,
            number : 0,
            assignmentId : props.assignmentId,
            students : right
        })
        setGroupName("")
        setRight([])
    }


    const ItemList = (props: { students: StudentEntityType[] }) => {
        return <Paper sx={{ width: 300, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {
                    props.students.map((student: StudentEntityType) => {
                        return <ListItem
                            key={student.id}
                            role="listitem"
                            button
                            onClick={handleToggle(student)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(student) !== -1}
                                    tabIndex={-1}
                                    disableRipple />
                            </ListItemIcon>
                            <ListItemText
                                primary={student.name} />
                        </ListItem>
                    })
                }
            </List>
        </Paper>
    }

    const CenterButtons = () => {
        return <>
            <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllRight}
                disabled={left.length === 0}
                aria-label="move all right">
                ≫
            </Button>
            <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right">
                &gt;
            </Button>
            <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left">
                &lt;
            </Button>
            <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllLeft}
                disabled={right.length === 0}
                aria-label="move all left">
                ≪
            </Button>
        </>
    }

    return <Modal open={props.show}
        onClose={props.onCloseHandler}>
        <Box sx={style}>
            <Stack sx={{ mb: 2 }}>
                <h2>
                    Add group
                </h2>
                <TextField fullWidth value={groupName}
                    label={"Group Name"}
                    onChange={handleGroupNameChange}
                    error={groupNameError !== ""}
                    helperText={groupNameError} />
            </Stack>
            <Stack sx={{ mb: 2 }}>
                <h4>Integrantes:</h4>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        <ItemList students={left} />
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <CenterButtons />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ItemList students={right} />
                    </Grid>
                </Grid>
            </Stack>
            <Stack alignItems="center" direction="row"
                justifyContent="center" spacing={2}>
                <Button variant="contained" color="primary"
                    onClick={ () => saveGroup() }>
                    Save
                </Button>
                <Button variant="contained" color="primary"
                    onClick={() => {
                        setGroupName("")
                        props.onCloseHandler()
                    }}>
                    Cancel
                </Button>
            </Stack>
        </Box>
    </Modal>
}

interface GroupModalProps {
    show: boolean
    assignmentId : string
    studentsLeft: StudentEntityType[]
    studentsInGroup: StudentEntityType[]
    onCloseHandler: () => void
    onSaveGroupHandler: (group: GroupEntityType) => void
}

export default GroupModal