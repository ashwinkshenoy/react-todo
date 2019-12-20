import React from 'react';

function TodoItem(props) {
  const { id, text, completed } = props.todo;
  return (
    <div>
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this, id)} checked={ completed ? 'checked': '' }/>
          {text}
        <button onClick={props.delTodo.bind(this, id)}>
          Remove
        </button>
      </p>
    </div>
  )
}

export default TodoItem;
