import { IconButton, TableCell, TableRow } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import ClearIcon from "@mui/icons-material/Clear"
import EditIcon from "@mui/icons-material/Edit"
import { RequirementCategory, RequirementEntityType } from "../../../../Domain/Entities/RequirementEntity"

export enum RequirementListItemMode {
    View, Edit
}

const RequirementListItem = (props : RequirementListItemProps) => {
    return <TableRow>
        <TableCell>{ `R${ props.index + 1 }` }</TableCell>
        <TableCell>{ props.requirement.description }</TableCell>
        <TableCell>
            {
                props.requirement.category === RequirementCategory.GRUPAL ? "Group" : "Individual"
            }
        </TableCell>
        <TableCell>{ props.requirement.complexity }</TableCell>
        <TableCell>
            <IconButton>
                <EditIcon />
            </IconButton>
        </TableCell>
    </TableRow>
}


interface RequirementListItemProps {
    mode : RequirementListItemMode
    index : number
    requirement : RequirementEntityType
}

export default RequirementListItem