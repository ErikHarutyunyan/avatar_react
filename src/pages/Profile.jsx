import React, { useEffect, useState } from 'react'
import axiosInstance from "../services/axiosInstance"
const Profile = () => {
  
  // eslint-disable-next-line no-unused-vars
  let [notes, setNotes] = useState([])
    useEffect(()=> {

      getNotes()
  }, [])

let getNotes = async() => {
  try {
    
    let {response, data} = await axiosInstance.get('/api/notes/')
   
    if(response?.status === 200){
        setNotes(data)
    }
  } catch (error) {
    console.log(error,"error-profile")
  }
    
}
  return (
    <div>Profile</div>
  )
}

export default Profile