import app from './firebase.config';

import {getFirestore, doc, setDoc, updateDoc, collection,query,/* where, */onSnapshot } from 'firebase/firestore';


const db = getFirestore(app);

async function getUsers() {
    const q =  query(collection(db, "users"),/* where("logged","==", true) */);
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const users = [];
   querySnapshot.forEach((doc) => {
      users.push(doc.data());
  });
  console.log( users);
});

}

async function addUser(user,uid){
    try {
        const docRef = await setDoc(doc(db, 'users',uid), {
            name: user.name,
            lastname:user.lastname,
            email: user.email,            
            logged:false,
            id:uid
        });
        return docRef
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

async function patchUser(uid){
    await updateDoc(doc(db, 'users', uid), {
        
        logged:true
      });
}


export {
    getUsers,
    addUser,
    patchUser
}