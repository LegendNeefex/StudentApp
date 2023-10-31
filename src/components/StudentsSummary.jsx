import StudentContext from "../context/StudentContext"
import { useContext } from "react"

function StudentsSummary() {
  const {myStud:student} = useContext(StudentContext)

    let totalCount = 0
    for (const item of student) {
      totalCount += item.classRating
    }

    // const avg = totalCount / studCount.length

    const avg = totalCount / student.length
    const avgg = avg.toFixed(2)

  return (
    <div className="name">
        <h4>{student.length} Student Enteries</h4>
        <h4>{isNaN(avgg)? 0 : avgg} Student Average Attendance Score</h4>
    </div>
  )
}

export default StudentsSummary