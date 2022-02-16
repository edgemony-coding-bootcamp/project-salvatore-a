import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { updateLogin, updateShowModal, updateUser } from "../store/action";

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
function signIn(newUser, dispatch) {
  signInWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then(() => {
      dispatch(updateLogin(true));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch(updateShowModal(true))
    });
}
function onCheck(id) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let uid = user.uid;
      patchUser(uid, true);

    } else {
      if (id) {
        patchUser(id, false);
      }
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
  dispatch(updateUser({ id: "", name: "", lastname: "", photo: "" }))
}

export { signup, signIn, onCheck, logOut };
