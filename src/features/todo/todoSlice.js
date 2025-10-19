import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: nanoid(), task: "abc", isDone: false}],
};


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : { //state and task
        addTodo: (state, action ) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTodo);   //Direct mutation
        },
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        markasDone : (state, action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
            })
        }
    }
})


export const { addTodo, deleteTodo, markasDone } = todoSlice.actions;   
export default todoSlice.reducer;