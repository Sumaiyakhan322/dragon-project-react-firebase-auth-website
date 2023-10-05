// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4BlFSIPftBGiwtwAovD4XAhovamU-zi8",
  authDomain: "dragon-react-auth-news-website.firebaseapp.com",
  projectId: "dragon-react-auth-news-website",
  storageBucket: "dragon-react-auth-news-website.appspot.com",
  messagingSenderId: "810945569550",
  appId: "1:810945569550:web:1447ddf66151367398ed5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default app