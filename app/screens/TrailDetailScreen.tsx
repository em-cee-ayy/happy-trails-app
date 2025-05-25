import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>🏕️ Trail details!</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F4A261', // sunset orange 🟠
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    color: '#fff',
    fontSize: 20,
},
});