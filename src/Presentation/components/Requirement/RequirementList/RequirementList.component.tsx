import { 
    IconButton, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableRow, TextField 
} from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import SaveIcon from "@mui/icons-material/Save"
import { useState } from "react"
import RequirementListItem, { RequirementListItemMode } from "./RequirementListItem.component"
import { RequirementCategory, RequirementEntityType } from "../../../../Domain/Entities/RequirementEntity"

const RequirementList = () => {
    const requirements : RequirementEntityType[] = [
        {
            id : "1", 
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            category : RequirementCategory.GRUPAL,
            assignmentId : "1",
            complexity : 3
        },
        {
            id : "2", 
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate enim velit, quis malesuada tellus molestie at. Suspendisse potenti. Etiam magna nulla, fringilla nec lacus a, venenatis pulvinar mi. Morbi mattis lobortis metus eu sodales. Etiam in neque tristique, rhoncus est at, dictum est. Quisque vitae leo semper, laoreet nisl accumsan, suscipit neque. Nulla facilisi. Sed vestibulum risus diam, sit amet aliquam tellus malesuada eu.",
            category : RequirementCategory.INDIVIDUAL,
            assignmentId : "1",
            complexity : 5
        }
    ]


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