import { BrowserRouter, Route, Routes } from "react-router-dom";
import Galeria from "../galeria/galeria";
import Header from "../Header/Header";
import Proyecto from "../Proyectos/proyecto";
import "./Home.css"

function Home() {
    return (
        <>
            <Header/>
            <Galeria />
        </>
    )
}

export default Home;