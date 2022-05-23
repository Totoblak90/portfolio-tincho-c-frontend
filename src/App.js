import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DetailProyect from "./components/DetailProyect/DetailProyect";
import AdminRoutes from "./components/AdminRoutes/AdminRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<DetailProyect />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
