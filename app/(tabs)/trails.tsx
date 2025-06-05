import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TrailsScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>🥾 welcome to the trails!</Text>
        <Text style={styles.subtext}>your hiking adventures start here 🌲</Text>

        <Link href="/trail-detail" asChild>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>View Trail Details</Text>
        </Pressable>
        </Link>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#DAD7CD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
},
    text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#344E41',
},
    subtext: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
    color: '#588157',
    textAlign: 'center',
},
    button: {
    backgroundColor: '#A7C957',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
},
    buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
},
});
