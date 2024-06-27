import { useState } from 'react';
import { AddTodoMenu } from './AddTodoMenu';
import './App.css';
import logo from './logo.svg';
import TodoList from './TodoList';

function App() {

  const [isEmpty, setIsEmpty] = useState(true);

  function onChange(e){
    if(e.target.value.length > 0){
      setIsEmpty(false);
    } else{
      setIsEmpty(true);
    }
  }

  return (
    <>
      <div id='container'>
      <div id='todoContainer'>
      <h1>Todo Application</h1>
      <AddTodoMenu isEmpty={isEmpty} onChange={onChange}/>
      <TodoList />
      </div>
      </div>
    </>
  )
}

export default App;
