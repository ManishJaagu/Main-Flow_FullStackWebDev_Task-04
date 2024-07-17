import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';



function TodoList() {
    const [todos, setTodos] = useState([]);

    
//function to not accepting not too many spaces
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    
//function to update ToDo list items
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item))
    );
    };

    //function to remove ToDo list items
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id!== id)

        setTodos(removeArr)
    }

    //function to mark ToDo list items as complete
const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
}


//toDo List Application Layout
    return (
    <div>
        <h1>What's the plan for Today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
    );
}

export default TodoList
