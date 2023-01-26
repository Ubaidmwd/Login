import React, { useEffect, useState } from 'react'
import { addTodo, deleteTodo, getTodo } from '../reducers/todoReducer'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const [myTodo, setTodo] = useState("")
    const dispatch = useDispatch()
    const todoData = useSelector(state => state.todo)
    useEffect(() => {

        dispatch(getTodo())
        

    },[])

    return (
        <>
            <input type="text" name="myTodo" id="" placeholder='Enter Your Todo' value={myTodo} defaultValue="todo"
                onChange={(e) => {
                    setTodo(e.target.value)
                }} />

            <button className='btn' onClick={() => dispatch(addTodo({ todo: myTodo }))}>Add</button>

            <ul className="collection">
                {
                    todoData && todoData.map(item => {
                        return <li className="collection-item" key={item._id} onClick={()=>dispatch(deleteTodo(item._id))}>{item.todo}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Todo;