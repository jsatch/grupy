import { GroupEntityType } from "../Domain/Entities/GroupEntity";
import { RequirementCategory, RequirementEntityType } from "../Domain/Entities/RequirementEntity";
import { StudentEntityType } from "../Domain/Entities/StudentEntity";
import { TaskEntityType } from "../Domain/Entities/TaskEntity";

const getMockStudentsData = () : StudentEntityType[] => {
    return  [
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
        { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
        { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
    ]
}

const getMockGroupsData = () : GroupEntityType[] => {
    return [
        { 
            id : "1", name : "Grupo 1", number : 1, assignmentId : "1",
            students : [
                { id : "1",  studentId : "20222123", name : "Lionel Messi", email : "lmessi@ulima.edu.pe"},
                { id : "2",  studentId : "20102134", name : "Cristiano Ronaldo", email : "cr7@ulima.edu.pe"},
            ]
        },
        { id : "2", name : "Grupo 2", number : 2, assignmentId : "1", students : [] }
    ]
}

const getMockRequirementsData = () : RequirementEntityType[] => {
    return [
        {
            id : "1", 
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            category : RequirementCategory.GRUPAL,
            assignmentId : "1",
            complexity : 3
        },
        {
            id : "2", 
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate enim velit, quis malesuada tellus molestie at. Suspendisse potenti. Etiam magna nulla, fringilla nec lacus a, venenatis pulvinar mi. Morbi mattis lobortis metus eu sodales. Etiam in neque tristique, rhoncus est at, dictum est. Quisque vitae leo semper, laoreet nisl accumsan, suscipit neque. Nulla facilisi. Sed vestibulum risus diam, sit amet aliquam tellus malesuada eu.",
            category : RequirementCategory.INDIVIDUAL,
            assignmentId : "1",
            complexity : 5
        }
    ]
}

const getMockTasksData = () : TaskEntityType[] => {
    return [
        {
            id : "1", 
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            category : RequirementCategory.GRUPAL,
            assignmentId : "1",
            complexity : 3,
            groupId : "1",
            studentId : "1231",
            student : null
        },
        {
            id : "2", 
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate enim velit, quis malesuada tellus molestie at. Suspendisse potenti. Etiam magna nulla, fringilla nec lacus a, venenatis pulvinar mi. Morbi mattis lobortis metus eu sodales. Etiam in neque tristique, rhoncus est at, dictum est. Quisque vitae leo semper, laoreet nisl accumsan, suscipit neque. Nulla facilisi. Sed vestibulum risus diam, sit amet aliquam tellus malesuada eu.",
            category : RequirementCategory.INDIVIDUAL,
            assignmentId : "1",
            complexity : 5,
            groupId : "1",
            studentId : null,
            student : {
                id : "1231",
                name : "Luis Lopez",
                email : "20222156@aloe.ulima.edu.pe",
                studentId : "20222156"
            }
        }, 
        {
            id : "3", 
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate enim velit, quis malesuada tellus molestie at. Suspendisse potenti. Etiam magna nulla, fringilla nec lacus a, venenatis pulvinar mi. Morbi mattis lobortis metus eu sodales. Etiam in neque tristique, rhoncus est at, dictum est. Quisque vitae leo semper, laoreet nisl accumsan, suscipit neque. Nulla facilisi. Sed vestibulum risus diam, sit amet aliquam tellus malesuada eu.",
            category : RequirementCategory.INDIVIDUAL,
            assignmentId : "1",
            complexity : 3,
            groupId : "1",
            studentId : null,
            student : {
                id : "1231",
                name : "Juan Carlos Flores",
                email : "20222156@aloe.ulima.edu.pe",
                studentId : "20222156"
            }
        }
    ]
}

export {getMockStudentsData , getMockGroupsData, getMockRequirementsData, getMockTasksData }