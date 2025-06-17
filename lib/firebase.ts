import auth from '@react-native-firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 🔐 your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBfI8wi9AwM_9GMjresYynUWG9ax6uAAYY",
    authDomain: "happy-trails-ai.firebaseapp.com",
    projectId: "happy-trails-ai",
    storageBucket: "happy-trails-ai.firebasestorage.app",
    messagingSenderId: "858931557867",
    appId: "1:858931557867:web:0bd79139d00770286515ae",
    measurementId: "G-X03HF65FDC"
};

// 🧠 initialize Firebase
const app = initializeApp(firebaseConfig);


// 🔐 initialize auth
// with @react-native-firebase/auth, initialization is handled automatically
export const db = getFirestore(app);
export { auth };
