import './App.css'
import React,{useEffect} from 'react'
import Auth from './components/Auth'
import 'materialize-css/dist/css/materialize.min.css'
import Todo from './components/Todo';
import { useSelector, useDispatch } from 'react-redux';
import { addtoken } from './reducers/authReducer';
const App = () => {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(addtoken())
  },[])
  return (
    <div className='App'>
      {
        token ? <Todo /> : <Auth />
      }

    </div>
  )
}

export default App