import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9j8BBh0TXlckA9-UGXquH3dxJRVx3nN8",
    authDomain: "crown-clothing-react2021.firebaseapp.com",
    projectId: "crown-clothing-react2021",
    storageBucket: "crown-clothing-react2021.appspot.com",
    messagingSenderId: "603520170241",
    appId: "1:603520170241:web:728e7561e1341c24474300"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            })
        } catch (err) {
            console.log("error creating user", err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;