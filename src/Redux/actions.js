import axios from "axios";
const api = import.meta.env.API_BASE_URL;

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
