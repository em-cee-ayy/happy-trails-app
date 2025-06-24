import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfI8wi9AwM_9GMjresYynUWG9ax6uAAYY",
    authDomain: "happy-trails-ai.firebaseapp.com",
    projectId: "happy-trails-ai",
    storageBucket: "happy-trails-ai.firebasestorage.app",
    messagingSenderId: "858931557867",
    appId: "1:858931557867:web:0bd79139d00770286515ae",
    measurementId: "G-X03HF65FDC"
};

const app = initializeApp(firebaseConfig);

// 👇 simple memory-only auth (no RN persistence)
export const auth = getAuth(app);

// 👇 your Firestore instance
export const db = getFirestore(app);
