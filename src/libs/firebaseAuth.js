import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { updateLogin, updateUser } from "../store/action";

import { addUser, patchUser } from "./firebaseFunctions";

const auth = getAuth();

function signup(newUser) {
  createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((userCredential) => {
      const user = userCredential.user;
      addUser(newUser, user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
function signIn(newUser, dispatch, setBanner) {
  signInWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then(() => {
      dispatch(updateLogin(true));
      localStorage.setItem("login Time", Date.now())
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setBanner(true)
    });
}
function onCheck(id, dispatch) {
  onAuthStateChanged(auth, (user) => {
    
    let loginTime = JSON.parse(localStorage.getItem("login Time"))
    let calc = (Date.now()-loginTime  )/60000
    
    if (user && calc < 15) {
      let uid = user.uid;
      if (user.uid){
        localStorage.setItem("login Time", Date.now())
        patchUser(uid, {logged:true});
        dispatch(updateLogin(true));
      }
    }
    else if ((auth.currentUser === null && id && calc > 15) || calc > 15 ) {
      patchUser(id, {logged:false});      
      dispatch(updateUser({ id: "", name: "", lastname: "", photo: "",status:false }))
      dispatch(updateLogin(false));
    } 

  });
}

function logOut(dispatch) {
  signOut(auth)
    .then(() => {
      dispatch(updateLogin(false));
     })
    .catch((error) => {
      console.log(error);
    });
  
}

export { signup, signIn, onCheck, logOut };
