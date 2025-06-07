import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { db } from '../../lib/firebase';


export default function ReportScreen() {
const [sighting, setSighting] = useState('');

const submitSighting = async () => {
    try {
        await addDoc(collection(db, 'sightings'), {
        type: sighting,
        reportedAt: serverTimestamp(),
        location: { lat: 40.01, lng: -105.25 }, // fake location for now
        reporterId: 'anonymous', // replace with real user later
        trailId: 'skyline-ridge',
        });
        setSighting('');
            alert('Sighting reported! 🐍');
    } catch (err) {
        console.error(err);
        alert('Error reporting sighting!');
    }
};

return (
    <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Report a Trail Sighting</Text>
        <TextInput
        value={sighting}
        onChangeText={setSighting}
        placeholder="e.g. rattlesnake 🐍"
        style={{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
        }}
    />
        <Pressable
        onPress={submitSighting}
        style={{ backgroundColor: '#588157', padding: 12, borderRadius: 8 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit Sighting</Text>
        </Pressable>
    </View>
);
}
