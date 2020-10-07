import React, { useState, useEffect } from 'react'
import firebase from "../utils/firebase"
export default function Tasks() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        var todoref = firebase.database().ref("TODOS")
        todoref.on("value", (snap) => {
            var todo = []
            for (let i in snap.val()) {
                todo.push({ i, ...snap.val()[i] })
            }
            console.log(todo)
            setTodos(todo)
        })
    }, [])

    const del = (e) => {
        var todoref = firebase.database().ref("TODOS").child(e.target.name)
        todoref.remove()
    }
    const comp = (e) => {
        e.target.value = !e.target.value
        var todoref = firebase.database().ref("TODOS").child(e.target.name)
        todoref.update({
            completed: !e.target.value
        })

    }

    return (
        <div>
            {todos.map((val) => { return (<div><h1 className={val.completed ? "task" : ""}>{val.title}</h1><button name={val.i} onClick={del} value={val.completed}>delete</button><button name={val.i} onClick={comp}>completed</button></div>) })}
        </div>
    )

}
