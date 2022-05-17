import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import React from "react";

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
