import React from 'react';
import styles from './Todo.module.scss';

const Todo =({ text, todo, todos, setTodos }) => {
    const deleteHandler = () =>{
        setTodos(todos.filter((item) => item.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item,    
                        completed: !item.completed,
                }
            }
            return item
        }))
    }

    return (
        <div className={styles.todoComponent}>
            <li className={`${styles.todoItem} ${todo.completed ? `${styles.completed}` : `${styles.nothing}`}`}> {text} </li>
            
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