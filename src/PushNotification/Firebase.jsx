import { createContext } from "react";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyB0luEf_4OQksO3wURFKLt1c4PTGST7qaQ",
    authDomain: "evento-push-notification.firebaseapp.com",
    projectId: "evento-push-notification",
    storageBucket: "evento-push-notification.appspot.com",
    messagingSenderId: "493782999000",
    appId: "1:493782999000:web:46865df9871fcbc1901cad",
    databaseURL: "https://evento-push-notification-default-rtdb.firebaseio.com"

};
const firebaseApp = initializeApp(firebaseConfig);




 
const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {

    return (
    
    <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
    )
}