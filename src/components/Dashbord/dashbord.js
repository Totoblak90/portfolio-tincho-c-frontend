import { Route, Routes } from "react-router-dom";
import "./dashbord.css";
import AdminHome from "../AdminHome/adminHome";
import AdminCreateProyect from "../AdminCreateProyect/AdminCreateProyect";
import AdminEditProyect from "../AdminEditProyect/AdminEditProyect";
import AdminCreateAssets from "../AdminCreateAssets/AdminCreateAssets";

function Dashbord() {
  return (
    <div className="dashbord">
      <Routes>
        <Route exact path="/" element={<AdminHome />} />
        <Route path="/create-proyect" element={<AdminCreateProyect />} />
        <Route path="/edit-proyect/:id" element={<AdminEditProyect />} />
        <Route path="/assets/:id" element={<AdminCreateAssets />} />
      </Routes>
    </div>
  );
}

export default Dashbord;
