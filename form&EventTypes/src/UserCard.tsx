import React, { type ChangeEvent, type FormEvent } from 'react'

const UserCard = () => {
  type UserCardType = {
    name : string,
    email:string,
    password:string
  }
  const [submittedData, setSubmittedData] = React.useState<UserCardType>({
    name :"",
    email:"",
    password:""
  })

  const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
    const {name , value} = e.target;
    setSubmittedData({...submittedData,[name]:value})
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(submittedData);
    
  }
  return (
    <div>
      User Card Details
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Enter your Name " type="text" name="name" id="" value={submittedData.name}/>
        <input onChange={handleChange} placeholder="Enter your Email" type="email" name="email" id="" value={submittedData.email}/>
        <input onChange={handleChange} placeholder="Enter the password" type="password" name="password" id=""value={submittedData.password}/>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>User Details</h2>
        <p>Name : {submittedData.name}</p>
        <p>Email : {submittedData.email}</p>
        <p>Password : {submittedData.password}</p>
      </div>

    </div>
  )
}

export default UserCard