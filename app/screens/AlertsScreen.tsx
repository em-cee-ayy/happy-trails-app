import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>🏕️ Here are the Alerts!</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#81B29A', // soft sage green 🟩
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    color: '#fff',
    fontSize: 20,
},
});