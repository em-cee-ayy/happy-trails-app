import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { db } from '../../lib/firebase';

const SIGHTING_TYPES = [
    { label: 'Snake', icon: '🐍', type: 'rattlesnake' },
    { label: 'Deer', icon: '🦌', type: 'deer' },
    { label: 'Bear', icon: '🐻', type: 'bear' },
    { label: 'Fire', icon: '🔥', type: 'fire' },
    { label: 'Blocked', icon: '🪵', type: 'obstacle' },
];

export default function ReportScreen() {
    const [selectedType, setSelectedType] = useState<string | null>(null);


    const handleSubmit = async () => {
    if (!selectedType) return Alert.alert('Pick a sighting type first!');
    try {
        await addDoc(collection(db, 'sightings'), {
        type: selectedType,
        location: {
            lat: 40.01,
            lng: -105.25,
        },
        reportedAt: serverTimestamp(),
        reporterId: 'test-user-id', // TODO: replace with auth
        trailId: 'skyline-ridge',
    });
    Alert.alert('Sighting reported!');
    setSelectedType(null);
    } catch (error) {
        console.error('error reporting sighting:', error);
        Alert.alert('Something went wrong.');
    }
};

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f5f5f5' }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>report a sighting 👀</Text>

<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
        {SIGHTING_TYPES.map((item) => (
            <Pressable
            key={item.type}
            onPress={() => setSelectedType(item.type)}
            style={{
                paddingVertical: 12,
                paddingHorizontal: 18,
                backgroundColor: selectedType === item.type ? '#A7C957' : '#E6E6E6',
                borderRadius: 12,
                margin: 6,
                alignItems: 'center',
            }}
            >
            <Text style={{ fontSize: 28 }}>{item.icon}</Text>
            <Text style={{ fontSize: 14, marginTop: 4 }}>{item.label}</Text>
            </Pressable>
        ))}
        </View>

<Pressable
        onPress={handleSubmit}
        style={{
            marginTop: 32,
            backgroundColor: '#344E41',
            paddingVertical: 14,
            paddingHorizontal: 32,
            borderRadius: 10,
        }}
        >
        <Text style={{ color: 'white', fontSize: 16 }}>submit sighting</Text>
        </Pressable>
    </View>
    );
}
