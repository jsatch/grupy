import { Button, Card, CardActions, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { GroupEntityType } from "../../../../Domain/Entities/GroupEntity"
import { StudentEntityType } from "../../../../Domain/Entities/StudentEntity"
import { GroupListMode } from "./GroupList.component"

const GroupListItem = (props : GroupListItemProps) => {

    const EditButtons = () => {
        return <CardActions>
            <Button size="small">
                Edit
            </Button>
            <Button size="small"
                onClick={ () => {
                    props.onDeleteGroupHandler(props.group)
                } }>
                Delete
            </Button>
        </CardActions>
    }

    const SelectButtons = () => {
        return <CardActions>
            <Button size="small"
                onClick={ () => { props.onSelectGroupHandler(props.group) } }>
                Select
            </Button>
        </CardActions>
    }

    return <Grid item xs={1}>
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    { props.group.name }
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        props.group.students.map((student : StudentEntityType) => (
                            <ListItem key={student.id}>
                                <ListItemText primary={student.name} secondary={student.studentId} />
                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>
            {
                props.mode === GroupListMode.EDIT ? <EditButtons /> : <SelectButtons />
            }
        </Card>
    </Grid>
}

interface GroupListItemProps {
    group : GroupEntityType
    mode : GroupListMode
    onSelectGroupHandler : (group : GroupEntityType) => void
    onDeleteGroupHandler : (group : GroupEntityType) => void
}

export default GroupListItem