import { selectGallery } from "../../Redux/gallery/selectors";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import AdminGalerias from "../AdminGalerias/AdminGalerias";
import AdminProyectos from "../AdminProyectos/AdminProyectos";

function AdminHome() {

  return (
    <>
      <AdminGalerias />
      <AdminProyectos />
    </>
  );
}

export default AdminHome;
