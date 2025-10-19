import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTask = () => {
    let [task, setTask] = useState("")
    const dispatch = useDispatch()

    let submitHandler = (evt) => {
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task))
        setTask("")
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e)=> setTask(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTask
