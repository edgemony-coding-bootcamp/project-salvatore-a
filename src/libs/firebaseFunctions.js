import app from "./firebase.config";

import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  
} from "firebase/firestore";
import { fetchGroups, fetchUsers } from "../store/action";

const db = getFirestore(app);
//-------------------------------------------------------------GET USERS----------------------------------------------------------------------------//


function getUser(querySnapshot,dispatch){
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  dispatch(fetchUsers(users))
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
async function patchUser(user, uid) {
  try {
    const docRef = await updateDoc(doc(db, "users", uid), {
      logged: !user.logged,
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//-------------------------------------------------------------/PATCH USERS--------------------------------------------------------------------------//

//-------------------------------------------------------------GET GROUPS----------------------------------------------------------------------------//


function getGroups(querySnapshot,dispatch){
  const groups = [];
  querySnapshot.forEach((doc) => {
    groups.push(doc.data());
    // console.log(doc.data())
  });
  dispatch(fetchGroups(groups))  
}

//-------------------------------------------------------------/GET GROUPS---------------------------------------------------------------------------//

//-------------------------------------------------------------ADD GROUPS----------------------------------------------------------------------------//
async function addGroup(name) {
  try {
    const docRef = await setDoc(doc(db, "groups", name), {
      messages: [],
      name:name
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//-------------------------------------------------------------ADD GROUPS----------------------------------------------------------------------------//

//-------------------------------------------------------------PATCH USERS---------------------------------------------------------------------------//
async function patchGroups(name, updatedMessages) {
  await updateDoc(doc(db, "groups", name), {
    //mandare un array contenente tutti i messaggi precedenti + il nuovo messaggio
    messages: updatedMessages,
  });
}
//-------------------------------------------------------------/PATCH USERS--------------------------------------------------------------------------//

export {getUser, addUser, patchUser, addGroup, patchGroups,getGroups };
