export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload); // el filter retorna un nuevo arreglo

    //forma corta
    case "TOGGLE_TODO":
      return state.map(todo =>
        ( todo.id === action.payload )
        ? { ...todo, done: !todo.done } 
        : todo
      );

    //Forma larga
    case "TOGGLE_TODO_OLD":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
