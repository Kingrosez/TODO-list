import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import AddTODO from "./components/addtodo";
import Heading from "./components/heading";
import ShowTODO from "./components/showtodo";
import WelcomeMessage from "./components/welcome";
import TodoContextProvider from "./store/contect";

function App() {
  return (
    <TodoContextProvider>
      <center>
        <Heading></Heading>
        <AddTODO></AddTODO>
        <WelcomeMessage></WelcomeMessage>
        <ShowTODO></ShowTODO>
      </center>
    </TodoContextProvider>
  );
}

export default App;
