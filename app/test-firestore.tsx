import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { db } from '../lib/firebase';


export default function TestFirestore() {
    useEffect(() => {
    const logSighting = async () => {
        try {
        const docRef = await addDoc(collection(db, 'sightings'), {
            type: 'rattlesnake',
            location: {
            lat: 40.01,
            lng: -105.25,
            },
            reportedAt: serverTimestamp(),
            reporterId: 'user_demo_001',
            trailId: 'sunset-peak',
        });
        console.log('✅ Sighting logged with ID:', docRef.id);
    } catch (e) {
        console.error('❌ Error adding sighting:', e);
    }
    };

    logSighting();
}, []);

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDF6F9' }}>
        <Text style={{ fontSize: 18, color: '#006D77' }}>Logging test sighting to Firebase... 🐍</Text>
    </View>
    );
}
