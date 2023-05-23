import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1,text:"Laundry"},{id:2,text:"cooking"}],
  }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo={
                id: nanoid(), //generate unique id
                text: action.payload

            };
            state.todos.push(todo);

        },
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)//return all todos except for the one which needs to be removed

        },      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addTodo, removeTodo } = todoSlice.actions
  
  export default todoSlice.reducer
  