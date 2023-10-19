import { useState } from "react"
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
    const [btn, setBtnClass] = useState('btn-disabled')

    const {studentAdd} = useContext(StudentContext)

    const textHandler = (e)=>{
        if (text === "") {
            setIsDisabled(true)
            setValMessage(null)
            setBtnClass('btn-disabled')
        }else if (text !== "" && text.trim().length <= 15) {
            setIsDisabled(true)
            setValMessage("Character is less than 15")
            setBtnClass('btn-disabled')
            
        }else{
            setIsDisabled(false)
            setValMessage(null)
            setBtnClass(null)
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

        studentAdd(myObj)
        setText("")
    }

  return (
    <Card>
        <form className="foorm" onSubmit={studentFormHandler}>
            <h2>Enter Student Rating</h2>
            <RatingSelector theRating = {(x)=> setClassRating(x)}/>
            <div className="form-group">
                <input onChange={textHandler} type="text" value={text} placeholder="Enter your content"/>
                <MainButton isDisabled={isDisabled} buttonClass={btn}>Post Am</MainButton>
            </div>
            {valMessage ? <div>{valMessage}</div> : null}
        </form>
    </Card>
  )
}

export default StudentForm