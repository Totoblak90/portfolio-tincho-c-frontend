import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <h1>Probando fuente</h1>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
