import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDM2uJaPacMSukoHHo_Sn2n1LLWett5Mdk",
    authDomain: "listapp-8bdb3.firebaseapp.com",
    databaseURL: "https://listapp-8bdb3-default-rtdb.firebaseio.com",
    projectId: "listapp-8bdb3",
    storageBucket: "listapp-8bdb3.appspot.com",
    messagingSenderId: "547641156807",
    appId: "1:547641156807:web:6b842727257f1d75b94ae2"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, app };