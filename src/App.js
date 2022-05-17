import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import { login } from "./Redux/actions";

async function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <h1> Hola como estan</h1>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
