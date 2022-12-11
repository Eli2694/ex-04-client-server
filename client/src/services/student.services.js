import axios from 'axios'

export const getStudent = async () => {
  let results = await fetch('http://localhost:3000/api/students')
  let arrayOfStudents = await results.json()
  return arrayOfStudents
}

export const postStudent = async (student) => {
  await axios.post('http://localhost:3000/api/students', student)
  alert('New Student Added')
}

export const removeStudentByFullName = async (FullName) => {
  console.log(FullName)
  await axios.delete(`http://localhost:3000/api/students/${FullName}`)
}
