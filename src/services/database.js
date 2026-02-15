import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";

function generateRandomCode() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 12; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function addCode(isBounty) {
  const randomCode = generateRandomCode();

  try {
    const docRef = await addDoc(collection(db, "items"), {
      code: randomCode,
      isSetup: false,
      name: null,
      message: null,
      createdAt: new Date(),
      isBounty: isBounty,
      bounty: 0,
      imageData: null,
    });
    console.log("Document written with ID: ", docRef.id);

    // Return the generated code and order to use in UI
    return { code: randomCode };
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
export async function fetchData(code) {
  const q = query(collection(db, "items"), where("code", "==", code));
  const snap = await getDocs(q);

  if (!snap.empty) {
    const docData = snap.docs[0].data();
    return docData;
  } else {
    return null;
  }
}

export async function setupCode(
  objectName,
  message,
  ownerName,
  ownerGmail,
  leID,
  Bounty
) {
  try {
    const q = query(collection(db, "items"), where("code", "==", leID));
    const snap = await getDocs(q);
    const cityRef = snap.docs[0].ref;

    const updateData = {
      code: leID,
      objname: objectName,
      message: message,
      name: ownerName,
      email: ownerGmail,
      isSetup: true,
    };

    if (Bounty !== null && Bounty !== undefined && !isNaN(Bounty)) {
      updateData.bounty = Bounty;
    } else {
      // Get the current document to check if it's a bounty item
      const currentDoc = snap.docs[0].data();
      if (currentDoc.isBounty) {
        updateData.bounty = 0; // Set to 0 for bounty items with no amount
      }
    }

    await setDoc(cityRef, updateData, { merge: true });

    console.log(
      `this code: ${snap.docs[0].data().code}
      \nthis objname: ${snap.docs[0].data().objmname}
      \nthis desc: ${snap.docs[0].data().message}
      \nthis name: ${snap.docs[0].data().name}
      \nthis mail: ${snap.docs[0].data().email}
      \nyour objname: ${objectName}
      \nyour desc: ${message}
      \nyour name: ${ownerName}
      \nyour mail: ${ownerGmail}`
    );
    console.log(snap.docs[0].data());
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export async function setLongLat(Lat, Lon, leID) {
  const q = query(collection(db, "items"), where("code", "==", leID));
  const snap = await getDocs(q);
  const codeRef = snap.docs[0].ref;
  setDoc(codeRef, { long: Lon, lat: Lat }, { merge: true });
  console.log(snap.docs[0].data().long);
  console.log(snap.docs[0].data().lat);
  return true;
}

export async function appendimageData(imageD, leID) {
  const q = query(collection(db, "items"), where("code", "==", leID));
  const snap = await getDocs(q);
  const codeRef = snap.docs[0].ref;
  setDoc(
    codeRef,
    { imageData: imageD, imageDate: new Date() },
    { merge: true }
  );
  console.log(snap.docs[0].data().imageD);
  console.log("yay");
  return true;
}

export async function GmailID(leGmail){
  const q = query(collection(db, "users"), where("email", "==", leGmail.toLowerCase()));
  const snap = await getDocs(q);
  if(snap.docs.length > 0){
  const codeRef = snap.docs[0].ref;
  console.log("/items?id=" + snap.docs[0].id)
  }
}

export async function IDGmail(leId){
  console.log(leId);
  const q = doc(db, "users", leId);
  const snap = await getDoc(q);
  if(snap.exists()){
    const codeRef = snap.data();
    //console.log(snap.data().email)
    const q2 = query(collection(db, "items"), where("email", "==", snap.data().email));
    const snap2 = await getDocs(q2);
    var c = [snap.data().email];

    for(var I = 0; I < snap2.docs.length; I++){
      //console.log(snap2.docs[I].data().name)
      c.push([snap2.docs[I].data().name, snap2.docs[I].data().objname, snap2.docs[I].data().message]);
    }

    return c;
  } else {
    return false;
  }

}