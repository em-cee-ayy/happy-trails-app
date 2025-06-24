import * as Location from "expo-location";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

import { db } from "../../lib/firebase";

type Sighting = {
  id: string;
  type: string;
  location: { lat: number; lng: number };
};

export default function MapScreen() {
  const [sightings, setSightings] = useState<Sighting[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 🧭 Get user's current location
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        Alert.alert(
          "Permission denied",
          "Please allow location access to see the map."
        );
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
      });
    })();
  }, []);

  // 🔁 Fetch real-time sightings from Firestore
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

  // 🌲 Example trail (future: GPS-tracked or from Firestore)
  const exampleTrail = [
    { latitude: 40.01, longitude: -105.25 },
    { latitude: 40.011, longitude: -105.251 },
    { latitude: 40.012, longitude: -105.252 },
  ];

  if (!location) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>
          {errorMsg ?? "Loading map... please wait 🌍"}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* 🟢 Optional: trail path */}
        <Polyline
          coordinates={exampleTrail}
          strokeColor="#6b8e23"
          strokeWidth={4}
        />

        {/* 📍 Trailhead (example) */}
        <Marker
          coordinate={{ latitude: 40.01, longitude: -105.25 }}
          title="Trailhead"
          description="Start of the trail"
          pinColor="green"
        />

        {/* 🔥 Live Sightings */}
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

// 🐾 Map icon to emoji
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
