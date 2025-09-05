export type Info={
   id : number;
   name : string;
   email : string;
}

export type adminInfoList = Info & { // & is used to combine two types
   role : string;
   lastLogin : Date;
}


 