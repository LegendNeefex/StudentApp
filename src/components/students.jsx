import Card from "../shared/Card"
import { AiFillCloseCircle } from "react-icons/ai";



function Students({clash, deleteHandler}) {
    return(
        <Card reverse = {true}>
            {/* <div className="not">{clash.id}</div> */}
            <div className="okay">{clash.fullName}</div>
            <div className="what">{clash.classRating}</div>
            <button className="btn-danger" onClick={()=> deleteHandler(clash.id, clash.FullName)}>
                <AiFillCloseCircle color="red" size={"15px"}/>
                Delete
            </button>
        </Card>
    )
}

export default Students;