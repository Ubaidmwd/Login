import React,{useState} from 'react'

const Auth = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [auth,setAuth]=useState("Signin")

  return (
    <>
    <h1>Please {auth}!</h1>
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
    {
        auth=='signin' ? 
        <h5 onClick={()=>setAuth('signup')}>do you have an Account?</h5>:
        <h5  onClick={()=>setAuth('signin')}>alredy have an Account?</h5>
    }
    <button className='btn'>{auth}</button>

    </>
  )
}

export default Auth;