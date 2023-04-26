import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CodeForInterview from './components/codeForInterview'
import AllUsers from './components/AllUsers'
import AddUsers from './components/AddUsers'
import Navbar from './components/Navbar'
import EditUser from './components/editUser'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CodeForInterview/>}/>
        <Route path='/all' element = {<AllUsers/>}/>
        <Route path='/add' element = {<AddUsers/>}/>
        <Route path='/edit/:id' element = {<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
