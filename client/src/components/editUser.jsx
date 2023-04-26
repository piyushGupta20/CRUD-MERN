import {useState,useEffect} from 'react'
import { getUser,setEditUser } from '../services/api'
import {useNavigate,useParams} from 'react-router-dom'

const EditUser = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    username:'',
    phone:'',
    email:'',
  })

  useEffect(()=>{
    loadUserDetails();
  },[])
  const updateValue = (e) => {
   var name = e.target.name
    var value = e.target.value
    setUser((prev) =>{
      return({...prev,[name]:value})
    } )
  }
  const {id} = useParams();
  const loadUserDetails = async() =>{
    const res = await getUser(id)
    setUser(res.data[0])
    // console.log(user.username);
}

const editUserDetails = async() => {
    await setEditUser(user,id)
    navigate('/all')
  }
  return (
    <>
    <div className='form'>
      <label> username &nbsp; 
      <input className="username"onChange={updateValue} type="text" name='username' value={user.username}
      placeholder='enter your username' />
      </label><br /><br />
      <label> phone &nbsp;
      <input className="username" onChange={updateValue} type="text" name='phone' value={user.phone}
      placeholder='enter your phone' />
      </label><br /><br />
      <label> email &nbsp;
      <input className="username" onChange={updateValue} type="text" name='email' value={user.email}
      placeholder='enter your email' />
      </label><br /><br />
      <button onClick={()=>editUserDetails()}>submit</button>

    </div>
    </>
  )
}

export default EditUser