import { applyMiddleware,createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {myReducer }from "./reducer";

const initStore = {
    url:'',
    users:[],
    groups:[],
    logged: false,
    user:{
        id:"",
        name:"",
        lastname:"",
        photo:"",
        email:"",
        status:false
    },
    messageId: 0
}


const store = createStore(myReducer,initStore,composeWithDevTools(applyMiddleware(thunk)))


export default store