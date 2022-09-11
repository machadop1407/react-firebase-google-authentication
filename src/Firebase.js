import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdIHQVgvrR41zt9OWeqJlG22aZGlMYzKk",
  authDomain: "photopedia-f1ed4.firebaseapp.com",
  projectId: "photopedia-f1ed4",
  storageBucket: "photopedia-f1ed4.appspot.com",
  messagingSenderId: "1053326425602",
  appId: "1:1053326425602:web:1a366d7d03bfe96249b11b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
