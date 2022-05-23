import thunk from "redux-thunk";
import gallery from './gallery'
import projects from './projects'
import assetsProyecto from './assets-proyecto'
import login from './login'

import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
  
const reducers = combineReducers({
    gallery,
    projects,
    assetsProyecto,
    login
});


export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});