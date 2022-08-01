import AddCircleIcon from "@mui/icons-material/AddCircle"
import { IconButton } from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import { CourseEntityStatus, CourseEntityType } from "../../Domain/Entities/CourseEntity"
import CourseList from "../components/Course/CourseList/CourseList.component"
import CourseModal, { CourseModalMode } from "../components/Course/CourseList/CourseModal.component"
import MainMenuBar from "../components/MainMenuBar.component"

const MainPage = () => {
    const pages = [
        { label : "Cursos", route : "/"},
        { label : "Configuración", route : "/settings"}
    ]

    const courses : CourseEntityType[] = [
        { id : "1" , name : "Programación Web", term : "2022-1", status : CourseEntityStatus.CREATED},
        { id : "2" , name : "Programación Web", term : "2022-2", status : CourseEntityStatus.CREATED}
    ]

    const [showCourseModal, setShowCourseModal] = useState(false)

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
            <CourseList courses={courses}/>
        </Container>
        <CourseModal show={ showCourseModal }
            mode={ CourseModalMode.Edit }
            onCloseHandler={ () => setShowCourseModal(false) } />
    </>
}


export default MainPage