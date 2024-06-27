import { useState } from 'react';
import { AddTodoMenu } from './AddTodoMenu';
import './App.css';
import TodoList from './TodoList';
import { defaultTodos } from './initialTodos';

function App() {

  const [isEmpty, setIsEmpty] = useState(true);
  const [nextTodoContent, setNextTodoContent] = useState('');
  const [todos, setTodos] = useState(defaultTodos);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function onChange(e){
    if(e.target.value.length > 0){
      setIsEmpty(false);
      setNextTodoContent(e.target.value);
    } else{
      setIsEmpty(true);
    }
  }

  function handleAddClick(e){
    let lastId = (todos.length > 0 ? todos[todos.length - 1].id : 1);
    setTodos([
        ...todos,
        {
            id: ++lastId,
            content: nextTodoContent,
            isCompleted: false
        }
    ]);
    setNextTodoContent('');
    setIsEmpty(true);
}

function handleEditClick(e, id){
  if(!isEditing){
    setIsEditing(true);
    setEditId(id);
  } else{
      const nextTodo = todos.find((todo) => {
        return todo.id === id;
    });

    let index = todos.findIndex((todo) => todo.id === id);

    nextTodo.content = e.target.parentElement.closest('.todo-item').querySelector('input').value;

    let nextTodos = todos.slice();
    nextTodos[index] = nextTodo;

    setTodos(nextTodos);
    setEditId(null);
    setIsEditing(false);
  }
}

function handleDeleteClick(id){
  const nextTodos = todos.slice();
  setTodos(nextTodos.filter((todo) => {
    return todo.id !== id;
  }))
}

  return (
    <>
      <div id='container'>
      <div id='todoContainer'>
      <h1>Todo Application</h1>
      <AddTodoMenu 
      isEmpty={isEmpty} 
      onChange={onChange} 
      onAddClick={handleAddClick}
      nextTodoContent={nextTodoContent}
      />
      <TodoList
        todos={todos}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        isEditing={isEditing}
        editId={editId}
        setEditId={setEditId}
      />
      </div>
      </div>
    </>
  )
}

export default App;
