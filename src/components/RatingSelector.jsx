import { useEffect, useState } from "react"
import { useContext } from "react"
import StudentContext from "../context/StudentContext"

function RatingSelector({theRating}) {
    const [selected, SetSelected] = useState ()
    const {itemEdit} = useContext(StudentContext)

    useEffect(()=>{
      SetSelected(itemEdit.item.classRating)
      theRating(itemEdit.item.classRating)
    },[itemEdit])

    const selectHandler = (e)=>{
        SetSelected(Number(e.target.value))
        theRating(Number(e.target.value))
    }

  return (
    <div>
        <ul className="rating">
        <li>
          <input
            onChange={selectHandler}
            id="num1"
            type="radio"
            name="rating"
            value={1}
            checked={selected === 1}
          />
          <label htmlFor="num1">1</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num2"
            type="radio"
            name="rating"
            value="2"
            checked={selected === 2}
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num3"
            type="radio"
            name="rating"
            value={3}
            checked={selected === 3}
          />
          <label htmlFor="num3">3</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num4"
            type="radio"
            name="rating"
            value={4}
            checked={selected === 4}
          />
          <label htmlFor="num4">4</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num5"
            type="radio"
            name="rating"
            value={5}
            checked={selected === 5}
          />
          <label htmlFor="num5">5</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num6"
            type="radio"
            name="rating"
            value={6}
            checked={selected === 6}
          />
          <label htmlFor="num6">6</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num7"
            type="radio"
            name="rating"
            value={7}
            checked={selected === 7}
          />
          <label htmlFor="num7">7</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num8"
            type="radio"
            name="rating"
            value={8}
            checked={selected === 8}
          />
          <label htmlFor="num8">8</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num9"
            type="radio"
            name="rating"
            value={9}
            checked={selected === 9}
          />
          <label htmlFor="num9">9</label>
        </li>
        <li>
          <input
            onChange={selectHandler}
            id="num10"
            type="radio"
            name="rating"
            value={10}
            checked={selected === 10}
          />
          <label htmlFor="num10">10</label>
        </li>
      </ul>
    </div>
  )
}

export default RatingSelector