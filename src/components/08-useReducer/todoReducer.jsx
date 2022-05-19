export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
        return [...state, action.payload];
     
    case "REMOVE_TODO":
        return state.filter(todo => todo.id !== action.payload); // el filter retorna un nuevo arreglo

    default:
      return state;
  }
};
