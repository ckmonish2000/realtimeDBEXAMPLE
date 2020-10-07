import React, { useState } from 'react'
import firebase from "../utils/firebase"
export default function Input() {
    const [title, setTitle] = useState("")
    const onchange = (e) => {
        setTitle(e.target.value)
    }
    const createTodo = () => {
        const todoref = firebase.database().ref("TODOS")
        const todo = {
            title,
            completed: false
        }
        todoref.push(todo)
        setTitle("")
    }
    return (
        <div>
            <h1>Todos</h1>
            <br />
            <input type="text" placeholder="Add Todos" value={title} onChange={onchange} />
            <button onClick={createTodo}>Add</button>
        </div>
    )
}
