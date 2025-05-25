import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>🏕️ Welcome to Happy Trails AI!</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#6A994E', // moss green 💚
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    color: '#fff',
    fontSize: 20,
},
});
