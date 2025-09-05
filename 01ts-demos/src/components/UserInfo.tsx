import React from 'react'
import type { Info } from "../types"

type UserInfoProp = {
  user: Info;
}
const UserInfo :React.FC<UserInfoProp>= ({user}) => {
  return (
    <div>
      <h1>UserInfo</h1>
      <h2>ID: {user.id}</h2>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
    </div>
  )
}

export default UserInfo