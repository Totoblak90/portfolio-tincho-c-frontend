import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import { getGallery } from "./Redux/actions";

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
