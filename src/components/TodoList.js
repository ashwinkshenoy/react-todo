import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showNotCompleted, setShowNotCompleted] = useState(false);

  const disableFilter = () => {
    setShowCompleted(false);
    setShowNotCompleted(false);
  }

  const toggleFilter = (value) => {
    if(value) {
      setShowCompleted(true);
      setShowNotCompleted(false);
    } else {
      setShowCompleted(false);
      setShowNotCompleted(true);
    }
  }

  const completed = () => {
    const todosCompleted = props.todoList.filter(todo => todo.completed);
    return renderList(todosCompleted);
  }

  const notCompleted = () => {
    const todosNotCompleted = props.todoList.filter(todo => !todo.completed);
    return renderList(todosNotCompleted);
  }

  const renderList = (todoList = props.todoList) => {
    todoList.sort((a,b) => b.id - a.id);
    return (
      todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />
      ))
    )
  }

  return (
    <div>
      {showCompleted ? completed() : showNotCompleted ? notCompleted() : renderList()}
      
      <button onClick={() => disableFilter()}>all</button>
      <button onClick={() => toggleFilter(true)}>completed</button>
      <button onClick={() => toggleFilter(false)}>not completed</button>
    </div>
  );
}

export default TodoList;
