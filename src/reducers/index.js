const todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, addTodos(action.payload)];

    case 'DELETE':
      const deleteTodos = state.filter(todo =>  todo.id !== action.payload);
      return deleteTodos;

    case 'COMPLETED':
      return completedTodos(state, action.payload);

    case 'SYNCSTORAGE':
      return action.payload;

    default:
      return state;
  }
}

export default todoReducer;

function addTodos(todoText) {
  return {
    text: todoText,
    id: +new Date(),
    completed: false
  }
}

function completedTodos(state, todoId) {
  return state.map(todo => {
    if(todo.id === todoId)
      todo.completed = !todo.completed;
    return todo;
  })
}
