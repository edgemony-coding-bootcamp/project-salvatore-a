import { applyMiddleware,createStore,compose } from "redux";
import thunk from 'redux-thunk';
import {myReducer }from "./reducer";

const initStore = {
    selected:0,
    users:[],
    groups:[],
    logged: false,
    user:{
        id:"",
        name:"",
        lastname:"",
        photo:"",
        email:""
    }
}

const store = createStore(myReducer,initStore,compose(applyMiddleware(thunk)))

export default store