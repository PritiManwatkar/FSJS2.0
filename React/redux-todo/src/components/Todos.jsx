import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
  return (
    <div>
       {
        todos.map((todo) => (
        <>
            <input type="checkbox"/>
            <input type="text" id={todo.id} value={todo.text} disabled/>             
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </>
        ))
        }
    </div>
  )
}

export default Todos
