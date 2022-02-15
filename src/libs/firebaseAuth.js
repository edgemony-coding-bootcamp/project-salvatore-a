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
function signIn(newUser, logged, dispatch) {
  signInWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((userCredential) => { })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
function onCheck(dispatch, users, id) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let uid = user.uid;
      dispatch(updateLogin(true));
      patchUser(uid, true);

      users.filter(
        (myUser) => myUser.id === uid && dispatch(updateUser(myUser))
      );
    } else {
      dispatch(updateLogin(false));
      if (id) {
        patchUser(id, false);
      }
    }
  });
}

function logOut(dispatch) {
  signOut(auth)
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });
  dispatch(updateUser({ id: "", name: "", lastname: "", photo: "" }))
}

export { signup, signIn, onCheck, logOut };
