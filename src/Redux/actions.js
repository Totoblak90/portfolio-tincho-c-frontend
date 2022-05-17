import axios from "axios";
import getToken from "../utilities/getToken";

export async function getGallery() {
  return async function (dispatch) {
    const info = await axios.get(`http://localhost:1500/api/gallery`, {});
    console.log(info.data);
    return dispatch({
      type: "GET_GALLERY",
      payload: info.data,
    });
  };
}

export function postGallery(filename) {
  return async function (dispatch) {
    let info = await axios.post(
      `http://localhost:1500/api/gallery/save`,
      filename,
      getToken()
    );
    return dispatch({
      type: "POST_GALLERY",
      payload: info.data,
    });
  };
}

export function deleteGallery(archivo) {
  return async function (dispatch) {
    let info = await axios.delete(
      `http://localhost:1500/api/gallery/delete`,
      archivo,
      getToken()
    );
    return dispatch({
      type: "DELETE_GALLERY",
      payload: info.data,
    });
  };
}

export async function login(formulario) {
  return async function (dispatch) {
    try {
      let info = await axios.post(
        "http://localhost:1500/api/users/login",
        formulario
      );
      return dispatch({
        type: "LOGIN",
        payload: info.data.token,
      });
    } catch (error) {
      alert(error.response.data.message)
    }
  };
}

export function resetPassword(formulario) {
  return async function (dispatch) {
    let info = await axios.post(
      "http://localhost:1500/api/users/reset-password",
      formulario,
      getToken()
    );
    return dispatch({
      type: "RESET_PASSWORD",
      payload: info.data,
    });
  };
}
