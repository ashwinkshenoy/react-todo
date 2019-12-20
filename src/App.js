import React, {useState} from 'react';

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
    setTodoList(todos)
  }

  const delTodo = (todoId) => {
    console.log(todoId);
    const todos = todoList.filter(todo =>  todo.id !== todoId);
    setTodoList(todos)
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo.bind(this)} />
      <TodoList todoList={todoList} markComplete={markComplete.bind(this)} delTodo={delTodo.bind(this)}/>
    </div>
  );
}

export default App;
