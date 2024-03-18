import { createContext, useReducer } from "react";
export const TodoContext = createContext([]);
const todoItemReducer = (state, action) => {
  let newItems = state;
  if (action.type === "ADD_ITEM") {
    newItems = [
      ...state,
      { name: action.payLoad.name, date: action.payLoad.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    console.log(action.payLoad.name);
    newItems = state.filter((item) => item.name !== action.payLoad.name);
  }
  return newItems;
};
function TodoContextProvider({ children }) {
  const [todoItems, dispatchTodos] = useReducer(todoItemReducer, []);
  let handelAdd = (name, date) => {
    console.log(name + " " + date);
    const addItemAction = {
      type: "ADD_ITEM",
      payLoad: {
        name,
        date,
      },
    };
    dispatchTodos(addItemAction);
  };
  let handelDelete = (name) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payLoad: {
        name,
      },
    };
    dispatchTodos(deleteItemAction);
  };
  return (
    <TodoContext.Provider value={{ todoItems, handelAdd, handelDelete }}>
      {children}
    </TodoContext.Provider>
  );
}
export default TodoContextProvider;
