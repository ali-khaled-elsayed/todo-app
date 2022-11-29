import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/form';
import Todolist from './components/todolist';

function App() {
    
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all'); 
  const [filter, setFilter] = useState([]); 
    
    
    
  useEffect(() => {
        getLocalTodos();
    }, []); 
    
  useEffect(()=> {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]); 
     
    
const filterHandler = () =>{
    switch(status){
        case 'Completed':
            setFilter(todos.filter(todo => todo.completed === true));
            break;
        case 'UnCompleted':
            setFilter(todos.filter(todo => todo.completed === false));
            break;
        default:
            setFilter(todos);
            break;
     }
}  

const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
} 

const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
        localStorage.setItem("todos", JSON.stringify([]));
    } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
        console.log(todoLocal);
    }
}

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
      
      />
      <Todolist filter={filter} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
