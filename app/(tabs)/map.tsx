import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { db } from '../../lib/firebase';

type Sighting = {
    id: string;
    type: string;
    location: { lat: number; lng: number };
};

export default function MapScreen() {
    const [sightings, setSightings] = useState<Sighting[]>([]);

    useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'sightings'), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        })) as Sighting[];
        setSightings(data);
    });

    return () => unsubscribe();
    }, []);

    return (
    <View style={{ flex: 1 }}>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: 40.01,
            longitude: -105.25,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }}
    >
        {sightings.map((sighting) => (
        <Marker
            key={sighting.id}
            coordinate={{
                latitude: sighting.location.lat,
                longitude: sighting.location.lng,
            }}
            title={sighting.type}
            description={`Reported near this location`}
        >
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>
                    {getSightingIcon(sighting.type)}
                </Text>
            </View>
        </Marker>
        ))}
        </MapView>
    </View>
    );
}

function getSightingIcon(type: string) {
    const icons: Record<string, string> = {
    rattlesnake: '🐍',
    bear: '🐻',
    deer: '🦌',
    fire: '🔥',
    obstacle: '🪵',
    };
    return icons[type] || '❓';
}
