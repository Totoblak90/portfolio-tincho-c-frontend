const initialState = {
  AllGalleries: [],
  AllProyects: [],
  DetaiilOfProyect: {},
  AllAssets: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_GALLERY":
      return {
        ...state,
        AllGalleries: action.payload,
      };
    case "POST_GALLERY":
      return {
        ...state,
      };
    case "DELETE_GALLERY":
      return {
        ...state,
      };
    case "LOGIN":
      return {
        ...state,
      };
    case "RESET_PASSWORD":
      return {
        ...state,
      };
    case "GET_PROYECTS":
      return {
        ...state,
        AllProyects: action.payload,
      };
    case "GET_PROPERTY_BY_ID":
      return {
        ...state,
        DetaiilOfProyect: action.payload,
      };
    case "POST_PROYECT":
      return {
        ...state,
      };
    case "EDIT_PROYECT":
      return {
        ...state,
      };
    case "DELETE_PROYECT":
      return {
        ...state,
      };
    case "GET_ASSETS":
      return {
        ...state,
        AllAssets: action.payload,
      };
    case "POST_ASSETS":
      return {
        ...state,
      };
    case "DELETE_ASSETS":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
