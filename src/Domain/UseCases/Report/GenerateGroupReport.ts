import TaskRepository from "../../../Data/repositories/TaskRepository"
import { DetailIndividualReportEntity } from "../../Entities/ReportEntity"
import { RequirementCategory } from "../../Entities/RequirementEntity"

const generateGroupReportUseCase = async (assignmentId : string, groupId : string) => {
    const taskRepository = TaskRepository()
    const tasks = await taskRepository.getTasksByAssignmentIdByGroupId(assignmentId, groupId)

    if (tasks.error !== "") {
        return {
            error : "Generate Group Report Error. Cannot get tasks by assignment and group",
            results : null
        }
    }

    const tasksEntities = tasks.results!

    // Generate group data
    let numGroupReqs = 0
    let totalGroupComplexity = 0
    let groupGrade = 0
    let numIndividualReqs = 0
    let totalIndividualComplexity = 0
    let individualDetail : Record<string, DetailIndividualReportEntity> = {}

    for (let task of tasksEntities) {
        if ( task.requirement!.category === RequirementCategory.GRUPAL ) {
            numGroupReqs++
            totalGroupComplexity += task.requirement!.complexity
            groupGrade += task.requirement!.complexity * task.grade 
        } else {
            numIndividualReqs++
            totalIndividualComplexity += task.requirement!.complexity

            console.log(task)
            if (task.student !== undefined) {
                individualDetail[task.studentId] = {
                    studentId : task.studentId,
                    studentName : task.student!.name,
                    numStories :  individualDetail[task.studentId] === undefined ? 1 : individualDetail[task.studentId].numStories + 1,
                    totalComplexity : individualDetail[task.studentId] === undefined ? task.requirement!.complexity : individualDetail[task.studentId].totalComplexity + task.requirement!.complexity,
                    groupGrade : 0,
                    individualGrade : individualDetail[task.studentId] === undefined ? task.requirement!.complexity * task.grade : individualDetail[task.studentId].individualGrade + (task.requirement!.complexity * task.grade),
                    total20Grade : 0,
                    totalGrade : 0
                }
            }

        }
    }

    const groupGradePercentage = (totalGroupComplexity / ( totalGroupComplexity + totalIndividualComplexity))
    const individualGradePercentage = (totalIndividualComplexity / ( totalGroupComplexity + totalIndividualComplexity))

    groupGrade = groupGrade / totalGroupComplexity
    
    // Calculate individual grades
    let individualGrades = Object.values(individualDetail).map((data : DetailIndividualReportEntity) => {
        const individualGrade = data.individualGrade / data.totalComplexity
        const totalGrade = (groupGrade * groupGradePercentage + individualGrade * individualGradePercentage)
        return {
            ...data,
            groupGrade  : groupGrade,
            individualGrade : individualGrade,
            totalGrade : totalGrade,
            total20Grade : totalGrade * 5
        }
    })



    return {
        results : {
            groupData : {
                numReqs : numGroupReqs,
                totalComplexity : totalGroupComplexity,
                gradePercentage : groupGradePercentage,
                groupGrade : groupGrade
            },
            individualData : {
                numReqs : numIndividualReqs,
                totalComplexity : totalIndividualComplexity,
                gradePercentage : individualGradePercentage,
                detail : individualGrades
            }
        },
        error : ""
    }
}

export default generateGroupReportUseCase