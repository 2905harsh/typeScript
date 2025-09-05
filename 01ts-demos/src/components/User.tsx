// type UserShape ={
//   name : string ;
//   age : number;
// }


interface UserShape{
  name : string ;
  age : number;
}
const User = ({ name, age }: UserShape) => {
  return (
    <div>
      User
      <br />
      {name} - {age}
    </div>
  );
};

export default User; 
