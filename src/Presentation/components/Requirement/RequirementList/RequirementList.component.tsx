import { 
    IconButton, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableRow, TextField 
} from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import SaveIcon from "@mui/icons-material/Save"
import { useState } from "react"
import RequirementListItem, { RequirementListItemMode } from "./RequirementListItem.component"
import { RequirementCategory, RequirementEntityType } from "../../../../Domain/Entities/RequirementEntity"
import { getMockRequirementsData } from "../../../../Mock/mockData"

const RequirementList = () => {
    const requirements : RequirementEntityType[] = getMockRequirementsData()

    const [requirementDescription, setRequirementDescription] = useState("")
    const [requirementType, setRequirementType] = useState(0)
    const [requirementComplexity, setRequirementComplexity] = useState(0)

    const handleChangeRequirementDescription = (event: any) => {
        setRequirementDescription(event.target.value);
    };

    const handleChangeRequirementType = (event: any) => {
        setRequirementType(event.target.value);
    };

    const handleChangeRequirementComplexity = (event: any) => {
        setRequirementComplexity(event.target.value);
    };

    return <TableContainer component={Paper} >
        <TableBody>
            {
                requirements.map((req : RequirementEntityType, index : number) => (
                    <RequirementListItem mode={RequirementListItemMode.View} 
                        index={ index }
                        requirement= {req }/>
                ))
            }
            

            <TableRow>
                <TableCell>
                    N
                </TableCell>
                <TableCell>
                    <TextField fullWidth value={ requirementDescription }
                        onChange={ handleChangeRequirementDescription }/>
                </TableCell>
                <TableCell>
                    <Select label="Tipo" value={ requirementType }
                        onChange={ handleChangeRequirementType }>
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
                    <IconButton>
                        <SaveIcon />
                    </IconButton>
                    <IconButton>
                        <ClearIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
    </TableContainer>
}

export default RequirementList