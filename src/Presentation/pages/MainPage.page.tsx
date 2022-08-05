import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Alert, IconButton } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CourseEntityType } from "../../Domain/Entities/CourseEntity"
import CourseList from "../components/Course/CourseList/CourseList.component"
import CourseModal, { CourseModalMode } from "../components/Course/CourseList/CourseModal.component"
import MainMenuBar from "../components/MainMenuBar.component"
import useViewModel from "../viewmodels/MainPageViewModel"

const MainPage = () => {
    const pages = [
        { label : "Cursos", route : "/"},
        { label : "Configuración", route : "/settings"}
    ]

    const { 
        courseList, error, showCourseModal, courseModalMode, selectedCourse,
        selectCourse, setShowCourseModal, getCourses, createCourse, updateCourse,
        setCourseModalMode, setSelectedCourse
    } = useViewModel()

    useEffect(() => {
        getCourses()
    }, [])

    const navigate = useNavigate()

    const onViewAssignmentsHandler = (course : CourseEntityType) => {
        navigate("/course", {
            state : {
                course : course
            }
        })
    }

    return <>
        <MainMenuBar pages={pages}/>
        <Container>
            <h2>
                Courses 
                <IconButton color="primary" component="label"
                    onClick={
                        () =>  {
                            setCourseModalMode(CourseModalMode.Add)
                            setSelectedCourse(null)
                            setShowCourseModal(true)
                        }
                    }>
                    <AddCircleIcon />
                </IconButton>
            </h2>
            <CourseList courses={ courseList }
                onSelectCourseHandler={ (course : CourseEntityType) => selectCourse(course)  }
                onViewAssignmentsHandler={ onViewAssignmentsHandler }/>
            {
                (() => {
                    if (error !== "") {
                        return <Alert severity="error">{ error }</Alert>
                    }
                })()
            }
        </Container>
        {
            (()=> {
                if (showCourseModal) {
                    return <CourseModal show={ showCourseModal }
                        mode={ courseModalMode }
                        onCreateCourseHandler={ createCourse }
                        onUpdateCourseHandler={ updateCourse }
                        course={ selectedCourse }
                        onCloseHandler={ () => {
                            setCourseModalMode(CourseModalMode.Add)
                            setShowCourseModal(false) 
                        } }/>
                }
            })()
        }
        
        
    </>
}


export default MainPage