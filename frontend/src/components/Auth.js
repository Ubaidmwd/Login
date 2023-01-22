import React,{useState} from 'react'
import { signUp } from '../reducers/authReducer'
import {useDispatch,useSelector} from 'react-redux'
const Auth = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const {loading,error}=useSelector(state=>state.user)
    const [auth,setAuth]=useState("signin")
    const authentication=()=>{
        if(auth=='signin'){

        }else{
          dispatch(signUp({email,password}))
        }
    }

  return (
    <>
    {
      loading &&  <div className="progress">
      <div className="indeterminate"></div>
  </div>
        
    }
    <h1>Please {auth}!</h1>
    {error && <h1 style={{color:"red"}}>{error}</h1>}
    <input type="email" 
    name="email" id="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    
    />
    <input type="password" 
    name="password" id="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    {
        auth=='signin' ? 
        <h5 onClick={()=>setAuth('signup')}>do you have an Account?</h5>:
        <h5  onClick={()=>setAuth('signin')}>alredy have an Account?</h5>
    }
    <button className='btn' onClick={authentication}>{auth}</button>

    </>
  )
}

export default Auth;