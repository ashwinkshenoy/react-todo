import React from 'react';

import { useDispatch } from 'react-redux';

// Actions
import { delTodos, completedTodos } from '../actions/index.js';

import './TodoItem.css';

import trash from '../static/trash.svg';

function TodoItem({todo}) {
  const { id, text, completed } = todo;
  const dispatch = useDispatch();

  const handleTodoChange = () => {
    dispatch(completedTodos(id));
  }
  
  const deleteTodo = () => {
    dispatch(delTodos(id));
  }

  return (
    <>
      <label className="todo" htmlFor={ id }>
        <input className="todo__state" type="checkbox" onChange={ handleTodoChange } checked={ completed ? 'checked': '' } id={ id } />
        
        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon">
          <use xlinkHref="#todo__line" className="todo__line"></use>
          <use xlinkHref="#todo__box" className="todo__box"></use>
          <use xlinkHref="#todo__check" className="todo__check"></use>
          <use xlinkHref="#todo__circle" className="todo__circle"></use>
        </svg>

        <div className="todo__text">{ text }</div>
        <button onClick={ deleteTodo } className="remove-button">
          <img src={ trash } alt="remove" />
        </button>
        
      </label>
    </>
    
  )
}

export default TodoItem;
