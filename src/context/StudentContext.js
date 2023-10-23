import { createContext, useState } from "react";
import StudentData from "../data/StudentData";
import { v4 } from "uuid";

// - Context

const StudentContext = createContext()

// - Provider
export const StudentProvider = ({children})=>{
    const [student, setStudent] = useState (StudentData)

    const deleteHandler = (id)=> { 
        if (window.confirm(`Are you sure you wanna delete this list`)) {
            setStudent(student.filter((item) => {
                return item.id !== id
            }))
        }
    }

    const studentAdd = (myObj)=>{
        myObj.id = v4();
        console.log(myObj);
        setStudent([myObj, ...student])
    }

    const stateData = {
        myStud:student,
        deleteHandler,
        studentAdd,
    }

    return <StudentContext.Provider value={stateData}>
        {children}
    </StudentContext.Provider>
}

export default StudentContext;