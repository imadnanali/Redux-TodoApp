import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTask from './AddTask'
import { deleteTodo, markasDone } from '../features/todo/todoSlice'

const Todo = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  console.log(todos)

  let clickHandler = (id) => {
    console.log(id)
    dispatch(deleteTodo(id))
  }



  return (
    <div>
      <AddTask />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: todo.isDone ? "red" : "black" }}>{todo.task} <button onClick={() => clickHandler(todo.id)}>Delete</button> <button onClick={() => dispatch(markasDone(todo.id))}>Task Done</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
