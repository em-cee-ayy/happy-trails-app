import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔐 Your actual config here — you already have this!
const firebaseConfig = {
apiKey: "AIzaSyBfI8wi9AwM_9GMjresYynUWG9ax6uAAYY",
authDomain: "happy-trails-ai.firebaseapp.com",
projectId: "happy-trails-ai",
storageBucket: "happy-trails-ai.firebasestorage.app",
messagingSenderId: "858931557867",
appId: "1:858931557867:web:0bd79139d00770286515ae",
measurementId: "G-X03HF65FDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🗃️ Initialize Firestore + Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
