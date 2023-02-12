import { StudentDetail } from '@/components/swr'
import { useState } from 'react'

export default function SWRPage() {
  const [studentList, setStudentList] = useState([1, 1, 1])

  const handleAddStudent = () => {
    setStudentList((prevStudentList) => [...prevStudentList, 1])
  }
  return (
    <div>
      <div>SWRPage</div>
      <div>
        <button onClick={handleAddStudent}>Add student</button>
      </div>
      <ul>
        {studentList?.map((student, index) => (
          <li key={index}>
            <StudentDetail studentId="lea2aa9l7x3a5v0" />
          </li>
        ))}
      </ul>
    </div>
  )
}
