import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvasyPEo9K7uPRhkiPlJtSs1g54lBjagQ",
  authDomain: "reactjs-device-cafe-app.firebaseapp.com",
  projectId: "reactjs-device-cafe-app",
  storageBucket: "reactjs-device-cafe-app.appspot.com",
  messagingSenderId: "1092057837178",
  appId: "1:1092057837178:web:e09f68af61e89332b9d5c3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! REGISTER
export const register = async (email, password, fullname, navigate) => {
  try {
    let user = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: fullname,
    });
    console.log(user);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOGIN
export const login = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOGOUT
export const logout = () => {
  signOut(auth);
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WITH GOOGLE
export const signUpGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! USER OBSERVER
export const userControl = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
    } else {
      setCurrentUser(false);
    }
  });
};
