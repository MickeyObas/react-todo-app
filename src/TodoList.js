import { useState } from "react";
import { defaultTodos } from './initialTodos';

import Todo from "./Todo"

function TodoList({ todos, handleDeleteClick}){

    return (
        <ul>
            {todos.map((todo) => 
                <Todo 
                item={todo} 
                key={todo.id} 
                onDeleteClick={handleDeleteClick}
                />
            )}
        </ul>
    )
}

export default TodoList;