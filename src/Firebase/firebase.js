import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD_07vCVm5OQwOmEzSVnr55qpxbJQGTQhw",
  authDomain: "dandd-b8204.firebaseapp.com",
  projectId: "dandd-b8204",
  storageBucket: "dandd-b8204.appspot.com",
  messagingSenderId: "89871640904",
  appId: "1:89871640904:web:ec29058359bbfe70686b7d"
};

// Initialize Firebase, Firestore and Auth
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

// Export the initialized instances to use in other files
export { app, db, auth };
