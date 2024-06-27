import { useState } from "react";
import { defaultTodos } from './initialTodos';

import Todo from "./Todo"

function TodoList({ todoList }){

    const [todos, setTodos] = useState(defaultTodos);

    function handleAddClick(e){
        let lastId = todos[-1].id;
        const nextTodos = todos.slice();
        setTodos([
            ...todos,
            {
                id: ++lastId,
                content: e.target.value,
                isCompleted: false
            }
        ])
    }

    return (
        <ul>
            {todos.map((todo) => 
                <Todo item={todo} key={todo.id}/>
            )}
        </ul>
    )
}

export default TodoList;