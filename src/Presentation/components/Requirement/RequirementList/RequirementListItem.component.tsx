import { IconButton, TableCell, TableRow } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import ClearIcon from "@mui/icons-material/Clear"
import EditIcon from "@mui/icons-material/Edit"

export enum RequirementListItemMode {
    View, Edit
}

const RequirementListItem = (props : RequirementListItemProps) => {
    return <TableRow>
        <TableCell>R1.</TableCell>
        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
        <TableCell>Grupal</TableCell>
        <TableCell>4</TableCell>
        <TableCell>
            <IconButton>
                <EditIcon />
            </IconButton>
        </TableCell>
    </TableRow>
}


interface RequirementListItemProps {
    mode : RequirementListItemMode
}

export default RequirementListItem