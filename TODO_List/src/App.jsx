import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import AddTODO from "./components/addtodo";
import Heading from "./components/heading";
import ShowTODO from "./components/showtodo";

function App() {
  const [addState, setAddState] = React.useState([
    {
      name: "Buy groceries",
      date: "2021-07-3",
    },

    {
      name: "Buy g",
      date: "2024-07-3",
    },
    {
      name: "groceries",
      date: "2031-07-3",
    },
    {
      name: "fairoAa",
      date: "2021-04-3",
    },
    {
      name: "BuyG",
      date: "2024-07-3",
    },
    {
      name: "groceies",
      date: "2031-07-3",
    },
  ]);

  let handelAdd = (name, date) => {
    let temp = {
      name: name,
      date: date,
    };
    setAddState([...addState, temp]);
  };
  let handelDelete = (item) => {
    addState.splice(addState.indexOf(item), 1);
    setAddState([...addState]);
  };
  return (
    <center>
      <Heading></Heading>
      <AddTODO add={handelAdd}></AddTODO>
      <ShowTODO items={addState} deleteData={handelDelete}></ShowTODO>
    </center>
  );
}

export default App;
