import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

// Actions
import { syncStorage } from './actions/index.js';

import './App.css';

function App() {

  const todoList = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoList'));  
    if(storedTodos) dispatch(syncStorage(storedTodos));    
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <h1>A Simple Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
