
import { Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const ResultsPanel = () => {
    return <Stack margin={2}>
        <h4>Group Stories</h4>
        <Grid container spacing={1} columns={4}>
            <Grid item xs={1}>
                Number:
            </Grid>
            <Grid item xs={3}>
                5
            </Grid>
            <Grid item xs={1}>
                Total Complexity:
            </Grid>
            <Grid item xs={3}>
                28
            </Grid>
            <Grid item xs={1}>
                Grade Percentage:
            </Grid>
            <Grid item xs={3}>
                20%
            </Grid>
            <Grid item xs={1}>
                Grade (0 - 4):
            </Grid>
            <Grid item xs={3}>
                3.456
            </Grid>
        </Grid>
        <h4>Individual Stories</h4>
        <Grid container spacing={1} columns={4}>
            <Grid item xs={1}>
                Grade Percentaje:
            </Grid>
            <Grid item xs={3}>
                80%
            </Grid>
        </Grid>
        <TableContainer component={Paper} sx={ {mt:2} }>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Student</TableCell>
                        <TableCell align="right"># Stories</TableCell>
                        <TableCell align="right">Total Complexity</TableCell>
                        <TableCell align="right">Grade (Prom)</TableCell>
                        <TableCell align="right">Group Grade</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Total (20)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key={"1"}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Juan Castro Sanchez
                        </TableCell>
                        <TableCell align="right">4</TableCell>
                        <TableCell align="right">23</TableCell>
                        <TableCell align="right">3.2</TableCell>
                        <TableCell align="right">3.456</TableCell>
                        <TableCell align="right">3.6</TableCell>
                        <TableCell align="right">17</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    </Stack>
}

export default ResultsPanel