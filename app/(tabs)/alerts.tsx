import { StyleSheet, Text, View } from 'react-native';

export default function AlertsScreen() {
return (
    <View style={styles.container}>
    <Text style={styles.text}>🚨 trail alerts & safety tips</Text>
    <Text style={styles.subtext}>stay safe out there, explorer!</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FAEDCD', // warm sand tone
    alignItems: 'center',
    justifyContent: 'center',
},
text: {
    fontSize: 22,
    fontWeight: '600',
    color: '#7F5539',
},
subtext: {
    fontSize: 16,
    marginTop: 6,
    color: '#9C6644',
},
});
