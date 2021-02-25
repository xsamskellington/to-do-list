import React from 'react';
import styles from './Todo.module.scss';

const Todo =({ text, todo, todos, setTodos }) => {
    const deleteHandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        
    }

    return (
        <div className={styles.todoComponent}>
            <li className={styles.todoItem}> {text} </li>
            
            <button onClick={completeHandler} className={styles.completeButton}>
                <i className={`material-icons ${styles.complete}`}> done </i>
            </button>

            <button onClick={deleteHandler} className={styles.deleteButton}>
                <i className={`material-icons ${styles.delete}`}> delete </i>
            </button>
        </div>
    )
}

export default Todo;