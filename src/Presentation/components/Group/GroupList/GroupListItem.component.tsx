import { Button, Card, CardActions, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { GroupEntityType } from "../../../../Domain/Entities/GroupEntity"
import { StudentEntityType } from "../../../../Domain/Entities/StudentEntity"

const GroupListItem = (props : GroupListItemProps) => {
    return <Grid item>
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
            <CardActions>
                <Button size="small">
                    Edit
                </Button>
                <Button size="small">
                    Delete
                </Button>
            </CardActions>
        </Card>
    </Grid>
}

interface GroupListItemProps {
    group : GroupEntityType
}

export default GroupListItem