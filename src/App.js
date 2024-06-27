import { useState } from 'react';
import { AddTodoMenu } from './AddTodoMenu';
import './App.css';
import logo from './logo.svg';
import TodoList from './TodoList';
import { defaultTodos } from './initialTodos';

function App() {

  const [isEmpty, setIsEmpty] = useState(true);
  const [nextTodoContent, setNextTodoContent] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

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
    const nextTodos = todos.slice();
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
        handleDeleteClick={handleDeleteClick}
      />
      </div>
      </div>
    </>
  )
}

export default App;
