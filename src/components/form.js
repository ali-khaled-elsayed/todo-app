import React from 'react';


const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
    
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
    
    const submitHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()}
        ]);
        setInputText("");
    };
    
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitHandler} type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="Completed">Completed</option>
                <option value="UnCompleted">UnCompleted</option>
            </select>
        </div>
        </form>
    );
}




export default Form;