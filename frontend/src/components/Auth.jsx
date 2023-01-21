import React,{useState} from 'react'

const Auth = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [auth,setAuth]=useState("Signin")

  return (
    <>
    <input type="email" 
    name="email" id=""
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    
    />
    <input type="password" 
    name="password" id=""
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <button className='btn'>{auth}</button>

    </>
  )
}

export default Auth;