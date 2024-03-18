import { useContext } from "react";
import { TodoContext } from "../store/contect";
export default function WelcomeMessage() {
  const { todoItems } = useContext(TodoContext);
  return todoItems.length === 0 && <h1>Nothig is here</h1>;
}
