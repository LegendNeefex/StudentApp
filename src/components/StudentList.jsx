import Students from "./students";
import StudentContext from "../context/StudentContext";
import { useContext } from "react";

function StudentList() {

    const {myStud:student, deleteHandler} = useContext(StudentContext)
    return (
        <>
            {student.map((item)=>(
                <Students deleteHandler={deleteHandler} key={item.id} item = {item}/>
                // <h2>okay</h2>
            ))}
        </>

    )
}

export default StudentList;