import React from 'react'
import User from './components/User'
import Demo from './components/Demo'
import Button from './components/Button'
import UserInfo from './components/UserInfo'
import AdminInfo from './components/AdminInfo'

import type {Info , adminInfoList} from "./types"

const App = () => { 

  const user :Info = {
    id:1,
    name:'John Doe',
    email:"john@gmail.com"
  }

  const admin : adminInfoList ={
    id:2,
    name:'jane smith',
    email:'jane@gmail.com',
    role:'admin',
    lastLogin : new Date(),
  }



  return (
    <div>
      <User name="alex" age= {20}/>
      <Demo>
        <p>This is the starting of the Og typescript.</p>
      </Demo>

      <Button label="click" onClick={()=>console.log('clicked')} disabled={false}/>

      <UserInfo user={user}/>
      <AdminInfo admin ={admin}/>
    </div>
  )
}
 
export default App