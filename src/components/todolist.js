import React from 'react';

import Todo from './todo';

const Todolist =({todos, setTodos, filter})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filter.map(todo => (
                     <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} />
                ))}
                
            </ul>
        </div>
    );
    
}




export default Todolist;