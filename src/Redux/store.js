import thunk from "redux-thunk";
import gallery from './gallery'
import projects from './projects'
import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
  
const reducers = combineReducers({
    gallery,
    projects
});


export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});