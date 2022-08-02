import { useState } from "react"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import viewCourseListUseCase from "../../Domain/UseCases/Course/ViewCourseList"

const MainPageViewModel = () => {
    const [error, setError] = useState("")
    const [courseList, setCourseList] = useState<CourseEntityType[]>([])

    const getCourses = async() => {
        const {results, error} = await viewCourseListUseCase()
        
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setCourseList(results!)
        }
    }

    return {
        courseList,
        error,
        getCourses
    }
}

export default MainPageViewModel