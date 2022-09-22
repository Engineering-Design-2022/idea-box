import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoV9o1jSinXsbz0LW-TzFgNZ2YnDrMuKM",
    authDomain: "fir-react-tutorial-98de1.firebaseapp.com",
    projectId: "fir-react-tutorial-98de1",
    storageBucket: "fir-react-tutorial-98de1.appspot.com",
    messagingSenderId: "850025522091",
    appId: "1:850025522091:web:9086943743e173c307a8ee"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;