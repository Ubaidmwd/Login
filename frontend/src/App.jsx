import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from './reducers/counter'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
       <span style={{fontSize:"50px",display:"flex",  justifyContent: "center"}}>{count}</span>
      <div>
        
        <button
          aria-label="Increment value"
          style={{width:"20%",height:"50px"}}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
       
        <button
          aria-label="Decrement value"
          style={{width:"20%",height:"50px"}}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          style={{width:"20%",height:"50px"}}
          onClick={() => dispatch(incrementByAmount(50))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  )
}

export default App
