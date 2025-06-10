import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
    return (
    <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={{
            latitude: 40.015,
            longitude: -105.2705,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        >
        <Marker
        coordinate={{ latitude: 40.015, longitude: -105.2705 }}
        title="Boulder Trail"
        description="One of your recent sightings 👀"
        />
        </MapView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
},
map: {
    flex: 1,
},
});
