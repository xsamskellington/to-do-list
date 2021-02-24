import React from 'react'
import styles from './Form.module.scss'

const Form = ({todos, setTodos, inputText, setInputText}) => {
    const inputTextHandler = (e) => {
        const {value} = e.target;
        console.log(value)
        setInputText(value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random()*1000 }]);
        setInputText('');

    }


    return (
        <form className={styles.form}>
            <input onChange={inputTextHandler} value={inputText} className={styles.input} type="text" />
            <button onClick={submitTodoHandler} className={styles.button} type="submit"> 
                +
            </button>

            <div className={styles.div}>
                <select name="todos" className={styles.todos}> 
                    <option value="all"> All </option>
                    <option value="completed"> Completed </option>
                    <option value="uncompleted"> Uncompleted </option>
                </select>
            </div>

        </form>
    )
}

export default Form;