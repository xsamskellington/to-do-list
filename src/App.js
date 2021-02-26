import React, { useState, useEffect } from 'react';
import styles from './App.module.scss'
import Form from './Components/Form/Form'
import TodoList from './Components/TodoList/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos()
  },[])

  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  }, [todos, status])
  
  const filterHandler =() =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=> todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
    }



  return (
    <>
    <header className={styles.header}>
      <h1>Sam's To Do List</h1>
    </header>
    <Form  
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus} 
        
        />

    <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos} />
    </>
  );
}

export default App;
