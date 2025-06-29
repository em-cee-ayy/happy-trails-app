import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

type Sighting = {
  id: string;
  type: string;
  location: { lat: number; lng: number };
};

export default function Map() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const [sightings, setSightings] = useState<Sighting[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Optional: set an error state or alert
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "sightings"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Sighting[];
      setSightings(data);
    });

    return () => unsubscribe();
  }, []);

  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading your location...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
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
            description="Reported nearby"
          >
            <Text style={{ fontSize: 22 }}>
              {getSightingIcon(sighting.type)}
            </Text>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

function getSightingIcon(type: string) {
  const icons: Record<string, string> = {
    rattlesnake: "🐍",
    bear: "🐻",
    deer: "🦌",
    fire: "🔥",
    obstacle: "🪵",
  };
  return icons[type] || "❓";
}
