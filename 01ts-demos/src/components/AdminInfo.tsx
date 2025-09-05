import React from "react";
import type { adminInfoList } from "../types";

type AdminInfoProp = {
  admin: adminInfoList;
};
const AdminInfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      <h1>Admin Info</h1> 
      <p>ID: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
