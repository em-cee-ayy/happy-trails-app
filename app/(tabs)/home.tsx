import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>🏕️ Home Sweet Trail</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#A7C957', // light vibrant green
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    color: '#fff',
    fontSize: 22,
},
});
