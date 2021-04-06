import React from "react";
import ReactDOM from "react-dom";
//component file
import { MyContext } from "./context";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

ReactDOM.render(
    <MyContext>
        <TodoContainer />
    </MyContext>,
    document.getElementById("root")
);
