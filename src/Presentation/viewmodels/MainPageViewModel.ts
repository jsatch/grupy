import { useState } from "react"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import createCourseUseCase from "../../Domain/UseCases/Course/CreateCourse"
import editCourseUseCase from "../../Domain/UseCases/Course/EditCourse"
import viewCourseListUseCase from "../../Domain/UseCases/Course/ViewCourseList"
import { CourseModalMode } from "../components/Course/CourseList/CourseModal.component"

const MainPageViewModel = () => {
    const [error, setError] = useState("")
    const [courseList, setCourseList] = useState<CourseEntityType[]>([])
    const [showCourseModal, setShowCourseModal] = useState(false)
    const [courseModalMode, setCourseModalMode] = useState<CourseModalMode>(CourseModalMode.Add)
    const [selectedCourse, setSelectedCourse] = useState<CourseEntityType | null>(null)

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

    const updateCourse = async(course : CourseEntityType) => {
        const {error} = await editCourseUseCase(course)

        if (error !== "") {
            setError(error)
        }else {
            setError(error)
            setCourseModalMode(CourseModalMode.Add)
            setSelectedCourse(null)
            setShowCourseModal(false)
            getCourses()
        }

    }

    const selectCourse = (course : CourseEntityType) => {
        setSelectedCourse(course)
        setCourseModalMode(CourseModalMode.Edit)
        
        setShowCourseModal(true)
        
    }

    return {
        courseList,
        error,
        showCourseModal,
        selectedCourse,
        courseModalMode,
        selectCourse,
        setShowCourseModal,
        setCourseModalMode,
        setSelectedCourse,
        getCourses,
        createCourse,
        updateCourse
    }
}

export default MainPageViewModel