import React from 'react'
import Auth from './components/Auth'
import 'materialize-css/dist/css/materialize.min.css'
// import "materialize-css/dist/js/materialize.min"
import Todo from './components/Todo';
import { useSelector,useDispatch} from 'react-redux';
import { addtoken } from './reducers/authReducer';
const App = () => {
  const token=useSelector(state=>state.user.token)
  const dispatch=useDispatch()
  dispatch(addtoken())
  return (
    <div>
      {
      
      token ? <Todo/>: <Auth/> 
      
      }
      
    </div>
  )
}

export default App