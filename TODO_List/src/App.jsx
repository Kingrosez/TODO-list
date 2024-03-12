import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import AddTODO from "./components/addtodo";
import Heading from "./components/heading";
import ShowTODO from "./components/showtodo";

function App() {
  return (
    <center>
      <Heading></Heading>
      <AddTODO></AddTODO>
      <ShowTODO></ShowTODO>
    </center>
  );
}

export default App;
