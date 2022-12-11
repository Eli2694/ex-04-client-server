import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StudentList } from './components/studentsList/studentList.component'
import { AddStudent } from './components/addStudent/add.student.components'
import { Main } from './Layout/main/main.layout'
import { PageNotFound } from './components/pageNotFound/pageNotFound.component'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Main></Main>
        <Routes>
          <Route path='/' element={<StudentList></StudentList>}></Route>
          <Route path='/addStudent' element={<AddStudent></AddStudent>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
