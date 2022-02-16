import { applyMiddleware,createStore,compose } from "redux";
import thunk from 'redux-thunk';
import {myReducer }from "./reducer";

const initStore = {
    modal:false,
    url:'',
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

const store = createStore(myReducer,initStore,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store