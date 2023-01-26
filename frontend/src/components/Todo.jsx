import e from 'express'
import React, { useState } from 'react'

const Todo = () => {
    const [todo,setTodo]=useState("")
    const addTodo=()=>{
        setTodo(e.target.value)
        console(todo)

    }
    return (
        <>
            <input type="text" name="" id="" placeholder='Enter Your Todo' value={todo}  />

            <button className='btn' onClick={addTodo}>Add</button>
        </>
    )
}

export default Todo