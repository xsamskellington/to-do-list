import React, { useState } from 'react';
import styles from './App.module.scss'
import Form from './Components/Form/Form'
import TodoList from './Components/TodoList/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <>
    <header className={styles.header}>
      <h1>Sam's To Do List</h1>
    </header>
    <Form  
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} />

    <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
