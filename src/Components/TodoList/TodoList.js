import React from 'react'
import Todo from '../Todo/Todo'


const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div>
            <ul>
            {filteredTodos.map((todo) => (
                <Todo 
                    todo={todo} 
                    todos={todos} 
                    setTodos={setTodos} 
                    text={todo.text} 
                    key={todo.id} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList