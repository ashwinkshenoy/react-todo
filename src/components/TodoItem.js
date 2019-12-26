import React from 'react';

function TodoItem({todo, markComplete, delTodo}) {
  const { id, text, completed } = todo;

  const handleTodoChange = () => {
    markComplete(id)
  }

  const deleteTodo = () => {
    delTodo(id);
  }

  return (
    <div>
      <p>
        <input type="checkbox" onChange={handleTodoChange} checked={ completed ? 'checked': '' }/>
          {text}
        <button onClick={deleteTodo}>
          Remove
        </button>
      </p>
    </div>
  )
}

export default TodoItem;
