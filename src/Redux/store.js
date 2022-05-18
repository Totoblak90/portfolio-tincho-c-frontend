import thunk from "redux-thunk";
import gallery from './gallery'
import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
  
const reducer = combineReducers({
    gallery
});


export const store = configureStore({
reducer,
devTools: process.env.NODE_ENV !== 'production',
middleware: [thunk]
});