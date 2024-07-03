import React, {useState, useEffect} from "react"
import axios from "axios"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import SetCookie from "../Utilities/Cookies/SetCookie.tsx"

const Login =()=>{
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [credentials, setCredentials] = useState({
    username:"",
    password:""
  });
useEffect(()=>{
  const fun = async ()=>{
    const response = axios.get('https://fakestoreapi.com/users',{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res=>res.data).then(data=>setUsers(data));
  }

  fun();


},[])
const handleSubmit = (e)=>{
  e.preventDefault();
  const Userindex = users.findIndex(item=>(item.email == credentials.username && item.password == credentials.password)) 
 if(Userindex !== -1){
   SetCookie("firstname",users[Userindex]?.name?.firstname,1);
   SetCookie("lastname",users[Userindex]?.name?.lastname , 1);
  alert("complited")
  navigate('/')
  document.location.reload()
}
 else{
  alert('wrong user')
 }


}
const handleChange=(e)=>{
  const {name , value} = e.target
  console.log(name, value)
  setCredentials((prev)=>({...prev, [name]:value}))
  
}
return(<center>
<form  className="login-form" onSubmit={(e)=>handleSubmit(e)}>
<h1>Log in</h1>
    <input className="username"
          value={credentials.username}
          onChange={(e)=>handleChange(e)}
          name="username"
    />
    <input className="password"
      value={credentials.password}
      name="password"
      onChange={(e)=>handleChange(e)}
    />
    <button>Login</button>

</form>
<div id="Hello"></div>


</center>
)
}
export default Login