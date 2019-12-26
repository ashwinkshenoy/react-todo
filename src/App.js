import React, { useState, useEffect } from 'react';

// Components
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import './App.css';

function App() {

  const [todoList, setTodoList] = useState([])

  const addTodo = (todo) => {
    const todoItem = {
      text: todo,
      id: +new Date(),
      completed: false
    }
    setTodoList([...todoList, todoItem])
  }

  const markComplete = (todoId) => {
    const todos = todoList.map(todo => {
      if(todo.id === todoId)
        todo.completed = !todo.completed;
      return todo;
    })
    setTodoList(todos);
  }

  const delTodo = (todoId) => {
    const todos = todoList.filter(todo =>  todo.id !== todoId);
    setTodoList(todos);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoList'));
    if(storedTodos) setTodoList(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <AddTodo addTodo={addTodo.bind(this)} />
      <TodoList todoList={todoList} markComplete={markComplete} delTodo={delTodo}/>
    </div>
  );
}

export default App;
