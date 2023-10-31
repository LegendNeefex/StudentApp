import { createContext, useEffect, useState } from "react";
import StudentData from "../data/StudentData";
import { v4 } from "uuid";

// - Context

const StudentContext = createContext()

// - Provider
export const StudentProvider = ({children})=>{
    const [student, setStudent] = useState ([])

    useEffect(()=>{
        dataFetcher();
    },[])

    const dataFetcher = async ()=>{
        const response = await fetch ("http://localhost:5001/students")
        const data = await response.json();
        setStudent(data);
        // console.log(data);
    }

    const deleteHandler = async(id)=> { 
        const response = await fetch (`http://localhost:5001/students/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({})
        })

        const data = await response.json();
        setStudent([data])
        if (window.confirm(`Are you sure you wanna delete this list`)) {
            setStudent(student.filter((item) => {
                return item.id !== id
            }))
        }
    }

    const studentAdd = async (myObj)=>{
        const response = await fetch ("http://localhost:5001/students",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(myObj)
        })
        const data = await response.json();
        setStudent([data, ...student])
    }

    const [itemEdit, setItemEdit] = useState({
        item:{fullName:'',id:'',classRating:''},
        editMode:false,
    })

    const editStudentHandler = async(item) =>{
        // console.log(clash);
        setItemEdit({
            item:item,
            editMode:true,
        })
    }

    const updateStudentHandler = async (id, updItem)=>{
        const response = await fetch (`http://localhost:5001/students/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updItem)
        })
        const data = await response.json();
        setStudent([data, ...student])

        setStudent(
            student.map((item)=>{
                if (item.id === id) {
                    return {
                        ...item, ...updItem
                    }
                }else{
                    return item
                }
            })
        )
    }

    const stateData = {
        myStud:student,
        deleteHandler,
        studentAdd,
        editStudentHandler,
        itemEdit,
        setItemEdit,
        updateStudentHandler,

    }

    return <StudentContext.Provider value={stateData}>
        {children}
    </StudentContext.Provider>
}

export default StudentContext;