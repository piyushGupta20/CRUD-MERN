import { useEffect, useState } from "react";
import { getUsers , deleteClientUser } from "../services/api";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    readAllUsers()
    
  }, []);

  const readAllUsers = async()=>{
    const res =  await getUsers();
    console.log("hello1")
    setUser(res.data);
  }


  const deleteDetails = async(id) => {
    await deleteClientUser(id);
    readAllUsers();
  }
  return <>
  <h1>Data table</h1>
    <table cellPadding={10} >
      <tbody>
      <tr>
        <th>id</th>
        <th>username</th>
        <th>phone</th>
        <th>email</th>
      </tr>
      {
        user.map((element)=>{
          const {_id,username,phone,email} = element
          return(
            <tr key={_id}>
              <td>{_id}</td>
              <td>{username}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>
                <button><Link to={`/edit/${_id}`} > EDIT</Link></button>
                <button onClick={()=>{deleteDetails(_id)}}>DELETE</button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  </>;
};

export default AllUsers;
