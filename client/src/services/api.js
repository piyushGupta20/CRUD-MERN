import axios from 'axios'
const URL = "http://localhost:5000"

export const addUser = async(data) =>{
    try{
        return await axios.post(`${URL}/add`,data);
        // console.log("api data",data);
    }catch(error){
        console.log("error: ",error);
    }

}

export const getUser = async(id) =>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log(error);
    }
}

export const setEditUser = async(data,id) => {
    try {
        
        return await axios.post(`${URL}/${id}`,data)
    } catch (error) {
        console.log(error.message);
    }
}

export const getUsers = async() =>{
    try{
        console.log("ho gaya")
        return await axios.get(`${URL}/all`)
        
    }catch(error){
        console.log("error in get all", error)
    }
}

export const deleteClientUser = async(id) =>{
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(error){
        console.log(error.message);
    }
}