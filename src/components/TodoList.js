import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import './TodoList.css'

function TodoList() {
  const todoList = useSelector(state => state);
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
    const todosCompleted = todoList.filter(todo => todo.completed);
    return renderList(todosCompleted);
  }

  const notCompleted = () => {
    const todosNotCompleted = todoList.filter(todo => !todo.completed);
    return renderList(todosNotCompleted);
  }

  const renderList = (todos = todoList) => {
    todos.sort((a,b) => b.id - a.id);
    if (todos.length === 0) {
      return (
        <div className="todos">
          <span className="empty-state">Start by adding / completing todos...</span>
        </div>
      )
    } else {
      return (
        <div className="todos">
          {todos.map((todo) => (
            <TodoItem key={ todo.id } todo={ todo } />
          ))}
        </div>
      )
    }
  }

  return (
    <>
      <div className="todo-buttons">
        <button onClick={ () => disableFilter() }>All</button>
        <button onClick={ () => toggleFilter(true) }>Completed</button>
        <button onClick={ () => toggleFilter(false) }>Not Completed</button>
      </div>

      <div className="todo-status-text">
        { todoList.filter(todo => todo.completed).length } / { todoList.length } tasks completed 
        <span>{ todoList.filter(todo => todo.completed).length === todoList.length ? '🎉' : '' }</span>
      </div>

      <div className="todo-list">
        <svg viewBox="0 0 0 0" className="svg-checkbox">
          <defs>
            <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
            <stop offset="0%"   stopColor="#27FDC7"/>
            <stop offset="100%" stopColor="#0FC0F5"/>
            </linearGradient>

            <linearGradient id="lineGradient">
            <stop offset="0%"    stopColor="#0FC0F5"/>
            <stop offset="100%"  stopColor="#27FDC7"/>
            </linearGradient>

            <path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h168v0.1z"></path>
            <path id="todo__box" stroke="url(#boxGradient)" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"></path>
            <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5"></path>
            <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
          </defs>
        </svg>

        { showCompleted ? completed() : showNotCompleted ? notCompleted() : renderList() }
      </div>
    </>
  );
}

export default TodoList;
