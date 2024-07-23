import React, {useState, useEffect} from "react"
import axios from "axios"

import { useNavigate } from "react-router-dom"
import SetCookie from "../../Utilities/Cookies/SetCookie.tsx"
import { Form , FloatingLabel, Button } from "react-bootstrap"

const Login =()=>{
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [credentials, setCredentials] = useState({
    username:"",
    password:""
  });
useEffect(()=>{
  const fun = async  ()=>{
     await axios.get('https://fakestoreapi.com/users',{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res=>res.data).then(data=>setUsers(data));
  }

  fun();


},[])
const handleSubmit = (e)=>{
  e.preventDefault();
const fun = async() =>{
  await axios.post("https://fakestoreapi.com/auth/login",{  username: credentials.username,
    password: credentials.password},{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(json=>json.data).then( json=>{
      
   SetCookie("firstname",credentials.username,1);
   SetCookie("jwt" , json.token , 1)
  alert("complited")
  navigate('/')
  document.location.reload()
 
}).catch(err=>alert(err))
 
} 
fun()
}
const handleChange=(e)=>{
  
  const {name , value} = e.target

  setCredentials((prev)=>({...prev, [name]:value}))
  
}
return(<>
    <Form style={{width:"50%" , margin:" 320px auto" , padding:"20px", border:"1px solid"}} onSubmit={(e)=>handleSubmit(e)}>
        <h1>Log in</h1>
        <Form.Group controlId="username" >
                <FloatingLabel label="username">
                
                <Form.Control type="text" placeholder="username" value={credentials?.username} name="username" onChange={(e)=>handleChange(e)} style={{width:"100%"}}/>
                </FloatingLabel>
        </Form.Group>
        <Form.Group style={{margin:"20px auto"}} controlId="password" >
        <FloatingLabel label="password">

                <Form.Control  name="password" type="password" placeholder="password" onChange={(e)=>handleChange(e)} style={{width:"100%"}}/>
        </FloatingLabel>
        </Form.Group>
        <Button type="submit" style={{textAlign:"center"}}>Log in</Button>
    </Form>
</>
)
}
export default Login