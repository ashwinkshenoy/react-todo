export const addTodos = (todoText) => {
  return {
    type: 'ADD',
    payload: todoText
  }
}

export const delTodos = (todoId) => {
  return {
    type: 'DELETE',
    payload: todoId
  }
}

export const completedTodos = (todoId) => {
  return {
    type: 'COMPLETED',
    payload: todoId
  }
}

export const syncStorage = (todos) => {
  return {
    type: 'SYNCSTORAGE',
    payload: todos
  }
}
