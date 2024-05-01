import {  userReducer } from "../reducer/Reducer";



const { createStore, combineReducers } = require("redux");
const rootReducer =combineReducers({
    userReducer
})


 export const myStore = createStore(rootReducer)