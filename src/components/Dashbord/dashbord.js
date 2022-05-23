import { Route, Routes } from "react-router-dom";
import "./dashbord.css";
import AdminHome from "../AdminHome/adminHome";
function Dashbord() {
  return (
    <div className="dashbord">
      <Routes>
        <Route exact path="/" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default Dashbord;
