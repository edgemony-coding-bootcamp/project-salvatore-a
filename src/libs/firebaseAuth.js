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
    if (user) {
      let uid = user.uid;
      if (user.uid){
        patchUser(uid, {logged:true});
        dispatch(updateLogin(true));
      }
    }
    else if (auth.currentUser === null && id) {
      patchUser(id, {logged:false});
      console.log(id)
      dispatch(updateUser({ id: "", name: "", lastname: "", photo: "" }))
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
