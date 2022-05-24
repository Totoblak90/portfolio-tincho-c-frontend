import { Route, Routes } from "react-router-dom";
import "./dashbord.css";
import AdminHome from "../AdminHome/adminHome";
import AdminCreateProyect from "../AdminCreateProyect/AdminCreateProyect";
function Dashbord() {
  return (
    <div className="dashbord">
      <Routes>
        <Route exact path="/" element={<AdminHome />} />
        <Route path="/create-proyect" element={<AdminCreateProyect />} />
      </Routes>
    </div>
  );
}

export default Dashbord;
