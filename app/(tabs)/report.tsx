import { View, Text } from "react-native";
export default function Report() {
  return (
    <View>
      <Text>simple report screen!</Text>
    </View>
  );
}

// import * as Location from 'expo-location'; // Re-enabled
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore'; // Re-enabled
// import { useEffect, useState } from 'react';
// import {
//     ActivityIndicator,
//     Alert,
//     Pressable,
//     Text,
//     View,
// } from 'react-native';
// import { db } from '../../lib/firebase'; // Re-enabled - Ensure this path is correct for your project structure

// // Define the Report component
// const Report = () => {
//     const [selectedType, setSelectedType] = useState<string | null>(null);
//     const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
//         null
//     );
//     const [loading, setLoading] = useState(false);

//     // 🌍 Get current location on mount
//     useEffect(() => {
//         (async () => {
//             const { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 Alert.alert('Permission to access location was denied');
//                 return;
//             }

//             const loc = await Location.getCurrentPositionAsync({});
//             setLocation({
//                 lat: loc.coords.latitude,
//                 lng: loc.coords.longitude,
//             });
//         })();
//     }, []);

//     const handleSubmit = async () => {
//         if (!selectedType) return Alert.alert('pick a sighting type first!');
//         if (!location) return Alert.alert('getting your location... please wait.');

//         try {
//             setLoading(true);
//             await addDoc(collection(db, 'sightings'), {
//                 type: selectedType,
//                 location,
//                 reportedAt: serverTimestamp(),
//                 reporterId: 'test-user-id',
//                 trailId: 'skyline-ridge',
//             });
//             // Reset state after successful submission

//             Alert.alert('Sighting reported! 🐾');
//             setSelectedType(null);
//         } catch (error) {
//             console.error('error reporting sighting:', error);
//             Alert.alert('something went wrong.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 padding: 16,
//                 backgroundColor: '#f5f5f5',
//             }}
//         >
//             <Text
//                 style={{
//                     fontSize: 22,
//                     fontWeight: 'bold',
//                     marginBottom: 16,
//                 }}
//             >
//                 report a sighting 👀
//             </Text>

//             <View
//                 style={{
//                     flexDirection: 'row',
//                     flexWrap: 'wrap',
//                     justifyContent: 'center',
//                     gap: 12,
//                 }}
//             >
//                 {SIGHTING_TYPES.map((item) => (
//                     <Pressable
//                         key={item.type}
//                         onPress={() => setSelectedType(item.type)}
//                         style={{
//                             paddingVertical: 12,
//                             paddingHorizontal: 18,
//                             backgroundColor:
//                                 selectedType === item.type ? '#A7C957' : '#E6E6E6',
//                             borderRadius: 12,
//                             margin: 6,
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Text style={{ fontSize: 28 }}>{item.icon}</Text>
//                         <Text style={{ fontSize: 14, marginTop: 4 }}>{item.label}</Text>
//                     </Pressable>
//                 ))}
//             </View>

//             <Pressable
//                 onPress={handleSubmit}
//                 disabled={loading}
//                 style={{
//                     marginTop: 32,
//                     backgroundColor: loading ? '#999' : '#344E41',
//                     paddingVertical: 14,
//                     paddingHorizontal: 32,
//                     borderRadius: 10,
//                 }}
//             >
//                 {loading ? (
//                     <ActivityIndicator color="white" />
//                 ) : (
//                     <Text style={{ color: 'white', fontSize: 16 }}>submit sighting</Text>
//                 )}
//             </Pressable>
//         </View>
//     );
// };

// const SIGHTING_TYPES = [
//     { label: 'Snake', icon: '🐍', type: 'rattlesnake' },
//     { label: 'Deer', icon: '🦌', type: 'deer' },
//     { label: 'Bear', icon: '🐻', type: 'bear' },
//     { label: 'Fire', icon: '🔥', type: 'fire' },
//     { label: 'Blocked', icon: '🪵', type: 'obstacle' },
// ];

// export default Report; // Explicitly export the Report component as default
