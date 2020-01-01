import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { addTodos } from '../actions/index.js';

import './AddTodo.css';


function AddTodo() {

  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(!todo) return;
    dispatch(addTodos(todo));
    setTodo('');
  }

  return (
    <div className="todo-form">
      <form onSubmit={(e) => onSubmit(e)} >
        <input 
          type="text" 
          placeholder="Add Todos..."
          value={todo}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodo;
