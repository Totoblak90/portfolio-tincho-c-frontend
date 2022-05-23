
import axios from "axios";
import { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { verifyUser } from "../../Redux/login";
import { verifyUserSelector } from "../../Redux/login/selector";
import Login from "../login/login";

function AdminRoutes() {
    const dispatch = useAppDispatch();
    const isUserLogged = useAppSelector(verifyUserSelector);

    useEffect(() => {
        const validateToken = () => {
            axios
                .post("http://localhost:1500/api/verify-token", {token: localStorage.getItem('tokenPorfolio')})
                    .then(res => {
                        dispatch(verifyUser(res.data))
                    })
                    .catch((err) => alert(err.response.data.message))
        }
        validateToken();
    }, [])
    console.log(isUserLogged)
    return (
        <>
            {
                isUserLogged ? <h2>Estas logueado</h2> : <Login />
            }
        </>
    )
}

export default AdminRoutes;