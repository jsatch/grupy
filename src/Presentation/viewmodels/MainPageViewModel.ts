import { useState } from "react"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import createCourseUseCase from "../../Domain/UseCases/Course/CreateCourse"
import viewCourseListUseCase from "../../Domain/UseCases/Course/ViewCourseList"

const MainPageViewModel = () => {
    const [error, setError] = useState("")
    const [courseList, setCourseList] = useState<CourseEntityType[]>([])
    const [showCourseModal, setShowCourseModal] = useState(false)

    const getCourses = async() => {
        const {results, error} = await viewCourseListUseCase()
        
        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setCourseList(results!)
        }
    }

    const createCourse = async(course : CourseEntityType) => {
        const {error} = await createCourseUseCase(course)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setShowCourseModal(false)
            getCourses()
        }

    }

    return {
        courseList,
        error,
        showCourseModal,
        setShowCourseModal,
        getCourses,
        createCourse
    }
}

export default MainPageViewModel