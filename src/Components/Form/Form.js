import React from 'react'
import styles from './Form.module.scss'

const Form = ({todos, setTodos, inputText, setInputText, setStatus}) => {
    const inputTextHandler = (e) => {
        const {value} = e.target;
        setInputText(value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if(!inputText){
            return;
        }

        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random()*1000 }]);
        setInputText('');
    }

    const statusHandler = (e) =>{
        const {value} = e.target;
        setStatus(value)
    }


    return (
        <form className={styles.form}>
            <input onChange={inputTextHandler} value={inputText} className={styles.input} required type="text" placeholder="write a task" maxLength='80' />
            <button onClick={submitTodoHandler} className={styles.button} type="submit"> 
                +
            </button>

            <div className={styles.div}>
                <select onChange={statusHandler} name="todos" className={styles.todos}> 
                    <option className={styles.option} value="all"> All </option>
                    <option className={styles.option} value="completed"> Completed </option>
                    <option className={styles.option} value="uncompleted"> Uncompleted </option>
                </select>
            </div>

        </form>
    )
}

export default Form;