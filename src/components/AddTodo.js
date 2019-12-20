import React, {useState} from 'react';

function AddTodo(props) {

  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo('')
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
      </form>
    </div>
  )
}

export default AddTodo;
