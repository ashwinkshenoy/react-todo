import React, {useState} from 'react';

function AddTodo({ addTodo }) {

  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    if(!e.target.value) return;
    setTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(!todo) return;
    addTodo(todo);
    setTodo('');
  }

  return (
    <div>
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
