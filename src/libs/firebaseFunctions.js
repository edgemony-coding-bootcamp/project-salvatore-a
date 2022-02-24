import app from "./firebase.config";

import { getFirestore, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { fetchGroups, fetchUsers } from "../store/action";

const db = getFirestore(app);
//-------------------------------------------------------------GET USERS----------------------------------------------------------------------------//

function getUser(querySnapshot, dispatch) {
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
    
  });
  dispatch(fetchUsers(users));
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
      photo: "",
      status:false
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//-------------------------------------------------------------/ADD USERS----------------------------------------------------------------------------//

//-------------------------------------------------------------PATCH USERS---------------------------------------------------------------------------//
async function patchUser(uid, newData) {
  try {
    const docUpdt = await updateDoc(doc(db, "users", uid), newData);
    return docUpdt;
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}
//-------------------------------------------------------------/PATCH USERS--------------------------------------------------------------------------//

//-------------------------------------------------------------GET GROUPS----------------------------------------------------------------------------//

function getGroups(querySnapshot, dispatch) {
  let groups = [];
  querySnapshot.forEach((doc) => {
    groups=[...groups,doc.data()];
  });
  dispatch(fetchGroups(groups));
}

//-------------------------------------------------------------/GET GROUPS---------------------------------------------------------------------------//

//-------------------------------------------------------------ADD GROUPS----------------------------------------------------------------------------//
async function addGroup(name) {
  try {
    const docRef = await setDoc(doc(db, "groups", name), {
      messages: [],
      name: name,
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
//-------------------------------------------------------------ADD GROUPS----------------------------------------------------------------------------//

//-------------------------------------------------------------PATCH GROUPS---------------------------------------------------------------------------//
async function patchGroups(type, name, update) {
  if (type === "messages") {
    await updateDoc(doc(db, "groups", name), {
      //mandare un array contenente tutti i messaggi precedenti + il nuovo messaggio
      messages: update,
    });
    
  } else if (type === "name") {
    await setDoc(doc(db, "groups", update.name), update);
    await deleteDoc(doc(db, "groups", name))
  } else if (type === "delete") {
    await deleteDoc(doc(db, "groups", name))
  }




}
//-------------------------------------------------------------/PATCH GROUPS--------------------------------------------------------------------------//

export { getUser, addUser, patchUser, addGroup, patchGroups, getGroups };
