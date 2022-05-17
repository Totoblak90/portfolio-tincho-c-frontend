import axios from "axios";
const api = process.env.API_BASE_URL;
import getToken from "../utilities/getToken";

export function getGallery() {
  return async function (dispatch) {
    const info = await axios.get(`${api}/gallery`, {});
    console.log(info.data);
    return dispatch({
      type: "GET_GALLERY",
      payload: info.data,
    });
  };
}

export function postGallery(filename) {
  return async function (dispatch) {
    let info = await axios.post(`${api}/gallery/save`, filename, getToken());
    return dispatch({
      type: "POST_GALLERY",
      payload: info.data,
    });
  };
}

export function deleteGallery(filename) {
  return async function (dispatch) {
    let info = await axios.delete(
      `${api}/gallery/delete`,
      filename,
      getToken()
    );
    return dispatch({
      type: "DELETE_GALLERY",
      payload: info.data,
    });
  };
}
