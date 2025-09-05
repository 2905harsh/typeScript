import React from 'react'
import { useState } from 'react'
type UserDataType = {
  name : string,
  age : number,
}
const UserData = () => {
  const [userData,setUserData]=useState<UserDataType>({
      name :'',
      age:null,
  })

  const updateName =(name : string)=>{
    setUserData({...userData,name:name});
    
  }
  const updateAge =(age : number)=>{
    setUserData({...userData,age:age});
  }


  return (
    <div>
      <h1>UserData</h1>
       <input placeholder="Enter your Name " type="text" value={userData.name} onChange={e => updateName(e.target.value)}/>
        <input placeholder="Enter your Age " type="number" value={userData.age} onChange={e => updateAge(Number(e.target.value))}/>
      <h2>Name : {userData.name}</h2>
      <h2>Age : {userData.age}</h2>
    </div>
  )
}

export default UserData