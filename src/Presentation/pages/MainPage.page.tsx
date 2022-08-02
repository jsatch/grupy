import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Alert, IconButton } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect } from "react"
import CourseList from "../components/Course/CourseList/CourseList.component"
import CourseModal, { CourseModalMode } from "../components/Course/CourseList/CourseModal.component"
import MainMenuBar from "../components/MainMenuBar.component"
import useViewModel from "../viewmodels/MainPageViewModel"

const MainPage = () => {
    const pages = [
        { label : "Cursos", route : "/"},
        { label : "Configuración", route : "/settings"}
    ]

    const { courseList, error, showCourseModal, setShowCourseModal, getCourses, createCourse } = useViewModel()

    useEffect(() => {
        getCourses()
    }, [])

    return <>
        <MainMenuBar pages={pages}/>
        <Container>
            <h2>
                Courses 
                <IconButton color="primary" component="label"
                    onClick={
                        () =>  setShowCourseModal(true)
                    }>
                    <AddCircleIcon />
                </IconButton>
            </h2>
            <CourseList courses={ courseList }/>
            {
                (() => {
                    if (error !== "") {
                        return <Alert severity="error">{ error }</Alert>
                    }
                })()
            }
        </Container>
        <CourseModal show={ showCourseModal }
            mode={ CourseModalMode.Add }
            onCreateCourseHandler={ createCourse }
            onCloseHandler={ () => setShowCourseModal(false) } />
        
    </>
}


export default MainPage