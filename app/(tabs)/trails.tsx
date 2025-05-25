import { StyleSheet, Text, View } from 'react-native';

export default function TrailsScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>🥾 welcome to the trails!</Text>
    <Text style={styles.subtext}>your hiking adventures start here 🌲</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#DAD7CD', // soft earth green-gray
    alignItems: 'center',
    justifyContent: 'center',
},
text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#344E41',
},
subtext: {
    fontSize: 16,
    marginTop: 8,
    color: '#588157',
},
});
