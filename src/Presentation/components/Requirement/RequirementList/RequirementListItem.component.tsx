import { IconButton, MenuItem, Select, TableCell, TableRow, TextField } from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import ClearIcon from "@mui/icons-material/Clear"
import EditIcon from "@mui/icons-material/Edit"
import { RequirementCategory, RequirementEntityType } from "../../../../Domain/Entities/RequirementEntity"
import { useState } from "react"

export enum RequirementListItemMode {
    View, Edit
}

const RequirementListItem = (props : RequirementListItemProps) => {
    const [mode, setMode] = useState<RequirementListItemMode>(props.mode)
    

    const changeMode = (newMode : RequirementListItemMode) => {
        setMode(newMode)
    }

    const RequirementRowViewMode = () => {
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
                <IconButton onClick={ () => changeMode(RequirementListItemMode.Edit) }>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={ () => props.onDeleteRequirementHandler(
                    props.requirement.id!, props.requirement.assignmentId) 
                }>
                    <ClearIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    }
    const RequirementRowEditMode = () => {
        const [requirementDescription, setRequirementDescription] = useState(props.requirement.description)
        const [requirementCategory, setRequirementCategory] = useState(props.requirement.category)
        const [requirementComplexity, setRequirementComplexity] = useState(props.requirement.complexity)

        const [requirementDescriptionError, setRequirementDescriptionError] = useState("")

        const handleChangeRequirementDescription = (event: any) => {
            setRequirementDescription(event.target.value);
        };

        const handleChangeRequirementCategory = (event: any) => {
            setRequirementCategory(event.target.value);
        };

        const handleChangeRequirementComplexity = (event: any) => {
            setRequirementComplexity(event.target.value);
        };

        const handleUpdateRequirement = () => {
            if (requirementDescription === "") {
                setRequirementDescriptionError("Error. Missing field.")
                return
            }
    
            props.onUpdateRequirementHandler({
                id : props.requirement.id!,
                description : requirementDescription,
                category : requirementCategory,
                complexity : requirementComplexity,
                assignmentId : props.requirement.assignmentId
            })
    
            changeMode(RequirementListItemMode.View)
        }

        return <TableRow>
            <TableCell>{ `R${ props.index + 1 }` }</TableCell>
            <TableCell>
                <TextField fullWidth value={ requirementDescription }
                    onChange={ handleChangeRequirementDescription }
                    error={ requirementDescriptionError !== "" }
                    helperText={ requirementDescriptionError }/>
            </TableCell>
            <TableCell>
                <Select label="Tipo" value={ requirementCategory }
                    onChange={ handleChangeRequirementCategory }>
                    <MenuItem value={0}>Grupal</MenuItem>
                    <MenuItem value={1}>Individual</MenuItem>
                </Select>
            </TableCell>
            <TableCell>
                <Select label="Complejidad" value={ requirementComplexity }
                    onChange={ handleChangeRequirementComplexity }>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </TableCell>
            <TableCell>
                <IconButton onClick={ handleUpdateRequirement }>
                    <SaveIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    }

    return mode === RequirementListItemMode.View ? <RequirementRowViewMode /> : <RequirementRowEditMode />
}


interface RequirementListItemProps {
    mode : RequirementListItemMode
    index : number
    requirement : RequirementEntityType
    onUpdateRequirementHandler : (requirement : RequirementEntityType) => void
    onDeleteRequirementHandler : (requirementId : string, assignmentId : string) => void
}

export default RequirementListItem