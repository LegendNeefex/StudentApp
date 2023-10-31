import { useEffect, useState } from "react"
import Card from "./shared/Card"
import MainButton from "./shared/MainButton"
import RatingSelector from "./components/RatingSelector"
import StudentContext from "./context/StudentContext"
import { useContext } from "react"
import { v4 } from "uuid"

function StudentForm() {

    const [text, setText] = useState("")
    const [isDisabled, setIsDisabled] = useState(true) 
    const [ClassRating, setClassRating] = useState ()
    const [valMessage, setValMessage] = useState("")
    
    const {studentAdd, itemEdit, updateStudentHandler} = useContext (StudentContext)
    
    useEffect(()=>{
        setText(itemEdit.item.fullName)
        setIsDisabled(false)
    },[itemEdit])
    
    const textHandler = (e)=>{
        if (text === "") {
            setIsDisabled(true)
            setValMessage(null)
        }else if (text !== "" && text.trim().length <= 7) {
            setIsDisabled(true)
            setValMessage("Character is less than 7")
        }else{
            setIsDisabled(false)
            setValMessage(null)
        }
        setText(e.target.value);
    }
    
    const studentFormHandler = (e)=>{
        e.preventDefault();
        
        const myObj = {
            fullName: text,
            classRating: ClassRating,
            id: v4()
        }

        if (text === "") {
            setIsDisabled(true)
            setValMessage("Sorry, content can't be empty")
        }else if (ClassRating === "") {
            setValMessage("Please confirm/include a rating.")
            setText(text)
            setIsDisabled(true)
        }else if (itemEdit.editMode === true) {
            updateStudentHandler(itemEdit.item.id, myObj)
            setText("")
        }else{
            studentAdd(myObj)
            setText("")
        }

    }
    
  return <div className="container" >
    <Card>
        <form onSubmit={studentFormHandler} className="card">
            <h2>Enter Student Rating</h2>
            <RatingSelector theRating = {(x)=> setClassRating(x)} className="rating" />
            <div className="input-group">
                <input onChange={textHandler} type="text" value={text ?? ''} placeholder="Enter your content"/>
                <MainButton isDisabled={isDisabled}>Post Am</MainButton>
            </div>
            {valMessage ? <div>{valMessage}</div> : null}
        </form>
    </Card>
    </div>
}

export default StudentForm