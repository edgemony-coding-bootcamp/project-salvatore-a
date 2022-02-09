import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { addUser, patchUser } from "./firebaseFunctions";

const auth = getAuth();

function signup(newUser){
createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    addUser(newUser,user.uid)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
}
function signIn(user){
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      patchUser(user.uid)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });

}


export {
    signup,
    signIn
}