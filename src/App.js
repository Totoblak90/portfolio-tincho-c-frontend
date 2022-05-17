import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import { login } from "./Redux/actions";

async function App() {
  console.log(
    await login({username: 'pedro', password: 'tinchoc123'})
  )
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
