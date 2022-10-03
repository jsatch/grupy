export interface GroupReportEntity {
    numReqs : number
    totalComplexity : number
    gradePercentage : number
    groupGrade : number
}

export interface DetailIndividualReportEntity {
    studentId : string
    studentName : string
    numStories : number
    totalComplexity : number
    individualGrade : number
    groupGrade : number
    totalGrade : number
    total20Grade : number
}

export interface IndividualReportEntity {
    numReqs : number
    totalComplexity : number
    gradePercentage : number
    detail : DetailIndividualReportEntity[]
}

export interface ReportEntityType {
    groupData : GroupReportEntity
    individualData : IndividualReportEntity
}

const ReportEntity = (groupData : GroupReportEntity, individualData : IndividualReportEntity) : ReportEntityType=> {
    return {
        groupData : groupData,
        individualData : individualData
    }
}

export default ReportEntity