import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

//... Copied from Firebase > Porject Settings > SDK setup and configuration > Config
const firebaseConfig = {
	apiKey: "AIzaSyCgdkUqmnav1f37M-9g1akaA-0mrqgyQpc",
	authDomain: "facebook-clone-react-01110111.firebaseapp.com",
	projectId: "facebook-clone-react-01110111",
	storageBucket: "facebook-clone-react-01110111.appspot.com",
	messagingSenderId: "521024147410",
	appId: "1:521024147410:web:62db66acecc4072153820b",
	measurementId: "G-3PZE4X6MJ3",
};

const firebaseApp = initializeApp(firebaseConfig); //... initialize firebaseApp with this config
const db = getFirestore(firebaseApp); //... use firestore databse
const auth = getAuth(); //... use firebase authentication
const provider = new GoogleAuthProvider(); //... use Google as an authentication provider

export {auth, provider, signInWithPopup	};
export default db;

// P.S: Putting the  Firebase settings in frontend is not a security risk. 
