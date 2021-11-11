import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiq";

const initializeauthentication=()=>{
    initializeApp(firebaseConfig);

}
export default initializeauthentication;