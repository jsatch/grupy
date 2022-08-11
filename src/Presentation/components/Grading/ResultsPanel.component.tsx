
import { Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { DetailIndividualReportEntity, ReportEntityType } from "../../../Domain/Entities/ReportEntity"

const ResultsPanel = (props : ResultsPanelProps) => {

    if (props.groupReportData === null) {
        return <div>No report data. Select a group</div>
    }

    return <Stack margin={2}>
        <h4>Group Stories</h4>
        <Grid container spacing={1} columns={4}>
            <Grid item xs={1}>
                Number:
            </Grid>
            <Grid item xs={3}>
                { props.groupReportData.groupData.numReqs }
            </Grid>
            <Grid item xs={1}>
                Total Complexity:
            </Grid>
            <Grid item xs={3}>
                { props.groupReportData.groupData.totalComplexity }
            </Grid>
            <Grid item xs={1}>
                Grade Percentage:
            </Grid>
            <Grid item xs={3}>
                { 
                    `${ (props.groupReportData.groupData.gradePercentage * 100).toFixed(2)} % `
                }
            </Grid>
            <Grid item xs={1}>
                Grade (0 - 4):
            </Grid>
            <Grid item xs={3}>
                { props.groupReportData.groupData.groupGrade.toFixed(2) }
            </Grid>
        </Grid>
        <h4>Individual Stories</h4>
        <Grid container spacing={1} columns={4}>
            <Grid item xs={1}>
                Number:
            </Grid>
            <Grid item xs={3}>
                { props.groupReportData.individualData.numReqs }
            </Grid>
            <Grid item xs={1}>
                Total Complexity:
            </Grid>
            <Grid item xs={3}>
                { props.groupReportData.individualData.totalComplexity }
            </Grid>
            <Grid item xs={1}>
                Grade Percentaje:
            </Grid>
            <Grid item xs={3}>
                { 
                    `${ (props.groupReportData.individualData.gradePercentage * 100).toFixed(2) } % `
                }
            </Grid>
        </Grid>
        <TableContainer component={Paper} sx={ {mt:2} }>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Student</TableCell>
                        <TableCell align="right"># Stories</TableCell>
                        <TableCell align="right">Total Complexity</TableCell>
                        <TableCell align="right">Individual Grade (Prom)</TableCell>
                        <TableCell align="right">Group Grade</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Total (20)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.groupReportData.individualData.detail.map( (data : DetailIndividualReportEntity) => {
                            return <TableRow
                                key={ data.studentId }
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    { data.studentName }
                                </TableCell>
                                <TableCell align="right">{ data.numStories }</TableCell>
                                <TableCell align="right">{ data.totalComplexity }</TableCell>
                                <TableCell align="right">{ data.individualGrade.toFixed(2) }</TableCell>
                                <TableCell align="right">{ data.groupGrade.toFixed(2) }</TableCell>
                                <TableCell align="right">{ data.totalGrade.toFixed(2) }</TableCell>
                                <TableCell align="right">{ data.total20Grade.toFixed(2) }</TableCell>
                            </TableRow>
                        } )
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>

    </Stack>
}

interface ResultsPanelProps {
    groupReportData : ReportEntityType | null
}

export default ResultsPanel