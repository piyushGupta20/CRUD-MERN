import {useState} from 'react'
import { addUser } from '../services/api'
import {useNavigate} from 'react-router-dom'

const AddUsers = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    username:'',
    phone:'',
    email:'',
  })

  const updateValue = (e) => {
   var name = e.target.name
    var value = e.target.value
    setUser((prev) =>{
      return({...prev,[name]:value})
    } )
  }

  const addUserDetails = async() =>{
    await addUser(user)
    navigate('/all')
  }
  return (
    <>
    <div className='form'>
      <label> username &nbsp; 
      <input className="username"onChange={updateValue} type="text" name='username'
      placeholder='enter your username' />
      </label><br /><br />
      <label> phone &nbsp;
      <input className="username" onChange={updateValue} type="text" name='phone'
      placeholder='enter your phone' />
      </label><br /><br />
      <label> email &nbsp;
      <input className="username" onChange={updateValue} type="text" name='email'
      placeholder='enter your email' />
      </label><br /><br />
      <button onClick={()=>addUserDetails()}>submit</button>

    </div>
    </>
  )
}

export default AddUsers