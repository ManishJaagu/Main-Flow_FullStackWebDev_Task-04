import { useState, useEffect, useRef } from "react"
import React from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        //update your task
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <> <input 
            type="text"
            placeholder="Update your Task"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button edit" onClick={handleSubmit}>Update</button>
            </>
            ) :
            //adding tasks
            (  
            <>
            <input 
                type="text"
                placeholder="Add a ToDo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="todo-button">Add ToDo</button>
                </>
            )}
        </form>
    );
}

export default TodoForm
