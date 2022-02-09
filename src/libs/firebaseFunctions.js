import app from "./firebase.config";

import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  collection,
  query,
  /* where, */ onSnapshot,
} from "firebase/firestore";

const db = getFirestore(app);
//-------------------------------------------------------------GET USERS----------------------------------------------------------------------------//
async function getUsers() {
  const users = [];
  const q = query(collection(db, "users") /* where("logged","==", true) */);
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
  });
  console.log(users);
  return users
}
//-------------------------------------------------------------/GET USERS----------------------------------------------------------------------------//

//-------------------------------------------------------------ADD USERS-----------------------------------------------------------------------------//
async function addUser(user, uid) {
  try {
    const docRef = await setDoc(doc(db, "users", uid), {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      logged: false,
      id: uid,
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//-------------------------------------------------------------/ADD USERS----------------------------------------------------------------------------//

//-------------------------------------------------------------PATCH USERS---------------------------------------------------------------------------//
async function patchUser(uid) {
  await updateDoc(doc(db, "users", uid), {
    logged: true,
  });
}
//-------------------------------------------------------------/PATCH USERS--------------------------------------------------------------------------//

//-------------------------------------------------------------GET GROUPS----------------------------------------------------------------------------//
async function getGroups() {
  const groups = [];
  const q = query(collection(db, "groups") /* where("logged","==", true) */);
  onSnapshot(q, (querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
      groups.push({name:doc.id,messages:doc.data().messages});
    });
    
    
  });
  
 
  
}
//-------------------------------------------------------------/GET GROUPS---------------------------------------------------------------------------//

//-------------------------------------------------------------ADD GROUPS----------------------------------------------------------------------------//
async function addGroup(name) {
  try {
    const docRef = await setDoc(doc(db, "groups", name), {
      messages:[]
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//-------------------------------------------------------------ADD GROUPS----------------------------------------------------------------------------//

//-------------------------------------------------------------PATCH USERS---------------------------------------------------------------------------//
async function patchGroups(name,updatedMessages) {
  await updateDoc(doc(db, "groups", name), {
    //mandare un array contenente tutti i messaggi precedenti + il nuovo messaggio
    messages: updatedMessages
    
  });
}
//-------------------------------------------------------------/PATCH USERS--------------------------------------------------------------------------//


export { getUsers, addUser, patchUser,getGroups,addGroup,patchGroups };
