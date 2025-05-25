import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>🏕️ This is the Trails Screen!</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#BC6C25', // warm clay brown 🟫
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    color: '#fff',
    fontSize: 20,
},
});