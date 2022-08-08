import { 
    IconButton, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableRow, TextField 
} from "@mui/material"
import SaveIcon from "@mui/icons-material/Save"
import { useState } from "react"
import RequirementListItem, { RequirementListItemMode } from "./RequirementListItem.component"
import { RequirementCategory, RequirementEntityType } from "../../../../Domain/Entities/RequirementEntity"
import { AssignmentEntityType } from "../../../../Domain/Entities/AssignmentEntity"

const RequirementList = (props : RequirementListProps) => {

    const [requirementDescription, setRequirementDescription] = useState("")
    const [requirementCategory, setRequirementCategory] = useState(RequirementCategory.GRUPAL)
    const [requirementComplexity, setRequirementComplexity] = useState(0)

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

    const handleCreateRequirement = () => {
        if (requirementDescription === "") {
            setRequirementDescriptionError("Error. Missing field.")
            return
        }

        props.onCreateRequirementHandler({
            description : requirementDescription,
            category : requirementCategory,
            complexity : requirementComplexity,
            assignmentId : props.assignment.id!
        })

        setRequirementDescription("")
        setRequirementCategory(RequirementCategory.GRUPAL)
        setRequirementComplexity(0)
    }

    return <TableContainer component={Paper} >
        <TableBody>
            {
                props.requirements.map((req : RequirementEntityType, index : number) => (
                    <RequirementListItem key={ req.id } 
                        mode={RequirementListItemMode.View} 
                        index={ index }
                        requirement={req }
                        onUpdateRequirementHandler={ props.onUpdateRequirementHandler }
                        onDeleteRequirementHandler={ props.onDeleteRequirementHandler }/>
                ))
            }
            <TableRow>
                <TableCell>
                    N
                </TableCell>
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
                    <IconButton onClick={ handleCreateRequirement }>
                        <SaveIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
    </TableContainer>
}

interface RequirementListProps {
    requirements : RequirementEntityType[]
    assignment : AssignmentEntityType
    onCreateRequirementHandler : (requirement : RequirementEntityType) => void
    onUpdateRequirementHandler : (requirement : RequirementEntityType) => void
    onDeleteRequirementHandler : (requirement : RequirementEntityType, assignmentId : string) => void
}

export default RequirementList