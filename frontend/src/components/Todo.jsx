import React, { useState } from 'react'
const Todo = () => {
    const [myTodo,setTodo]=useState("")
    
    const addTodo=()=>{
        console.log(myTodo)
    }
    return (
        <>
            <input type="text" name="myTodo" id="" placeholder='Enter Your Todo'    value={myTodo}  defaultValue="todo"
            onChange={(e)=>{
            setTodo(e.target.value)
            }}/>

            <button className='btn' onClick={addTodo}>Add</button>
        </>
    )
}

export default Todo;