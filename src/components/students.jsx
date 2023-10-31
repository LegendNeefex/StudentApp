import Card from "../shared/Card"
import { FaEdit, FaTimesCircle } from "react-icons/fa"; 
import { useContext } from "react";
import StudentContext from "../context/StudentContext";



function Students({item, deleteHandler}) {

    const {editStudentHandler} = useContext(StudentContext)

    return <div className="container">
        <Card reverse = {true}>
           <div className="card">
                {/* <div className="not">{clash.id}</div> */}
                <div>{item.fullName}</div>
                <div>{item.classRating}</div>
                <button className="close" onClick={()=> deleteHandler(item.id, item.FullName)}>
                    <FaTimesCircle color="red" size={"20px"}/>
                </button>
                <button className="edit" onClick={()=>{editStudentHandler(item)}}>
                    <FaEdit color="black" size={"20px"}/>
                </button>
           </div>
        </Card>
    </div>
        
}

export default Students;