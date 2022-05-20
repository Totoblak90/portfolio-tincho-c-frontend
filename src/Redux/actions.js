// export const setActionRequest = (type,payload) => ({
//   type, payload
// })

// import axios from "axios";
// import getToken from "../utilities/getToken";


// export async function getGallery() {
//     try {
//       const info = await axios.get(`http://localhost:1500/api/gallery`, {});
//       console.log(info.data);
//       return dispatch({
//         type: "GET_GALLERY",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
// }

// export function postGallery(filename) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.post(
//         `http://localhost:1500/api/gallery/save`,
//         filename,
//         getToken()
//       );
//       return dispatch({
//         type: "POST_GALLERY",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function deleteGallery(archivo) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.delete(
//         `http://localhost:1500/api/gallery/delete`,
//         archivo,
//         getToken()
//       );
//       return dispatch({
//         type: "DELETE_GALLERY",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function login(formulario) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.post(
//         "http://localhost:1500/api/users/login",
//         formulario
//       );
//       localStorage.setItem("tokenPorfolio", info.data.token);
//       return dispatch({
//         type: "LOGIN",
//         payload: info.data.token,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function resetPassword(formulario) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.put(
//         "http://localhost:1500/api/users/reset-password",
//         formulario,
//         getToken()
//       );
//       return dispatch({
//         type: "RESET_PASSWORD",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function getProyects() {
//   return async function (dispatch) {
//     try {
//       let info = await axios.get("http://localhost:1500/api/proyects", {});
//       return dispatch({
//         type: "GET_PROYECTS",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function getProyectById(id) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.get(`http://localhost:1500/api/proyects/${id}`);
//       return dispatch({
//         type: "GET_PROPERTY_BY_ID",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function postProyect(formulario) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.post(
//         "http://localhost:1500/api/proyects/saveProyect",
//         formulario,
//         getToken()
//       );
//       return dispatch({
//         type: "POST_PROYECT",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function editProyect(id, formulario) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.put(
//         `http://localhost:1500/api/proyects/editProyect/${id}`,
//         formulario,
//         getToken()
//       );
//       return dispatch({
//         type: "EDIT_PROYECT",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function deleteProyect(id) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.delete(
//         `http://localhost:1500/api/proyects/deleteProyect/${id}`,
//         getToken()
//       );
//       return dispatch({
//         type: "DELETE_PROYECT",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function getAssets(id) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.get(`http://localhost:1500/api/assets/${id}`);
//       return dispatch({
//         type: "GET_ASSETS",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function postAssets(id, array) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.post(
//         `http://localhost:1500/api/assets/saveAsset/${id}`,
//         array,
//         getToken()
//       );
//       return dispatch({
//         type: "POST_ASSETS",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }

// export function deleteAssets(array) {
//   return async function (dispatch) {
//     try {
//       let info = await axios.delete(
//         "http://localhost:1500/api/assets/deleteAssets"
//       );
//       return dispatch({
//         type: "DELETE_ASSETS",
//         payload: info.data,
//       });
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };
// }
