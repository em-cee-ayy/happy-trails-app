import { Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function TrailDetailScreen() {
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image
        source={{ uri: 'https://images.unsplash.com/photo-1615825817210-02eac1442fd2' }}
        style={styles.trailImage}
        />
        <Text style={styles.trailName}>Skyline Ridge Trail</Text>
        <Text style={styles.trailMeta}>🌲 Moderate · ⏱ 2.5 hours · 🐾 Dog Friendly</Text>

        <Text style={styles.sectionTitle}>Trail Description</Text>
        <Text style={styles.trailDescription}>
        This scenic trail winds through a beautiful pine forest with panoramic views of the mountains. 
        Expect moderate elevation and plenty of wildlife sightings along the way!
        </Text>

        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Start Hike</Text>
        </Pressable>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
container: {
    padding: 16,
    backgroundColor: '#F2F1EB', // soft parchment
},
trailImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
},
trailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#344E41',
    marginBottom: 4,
},
trailMeta: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 16,
},
sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#588157',
    marginBottom: 8,
},
trailDescription: {
    fontSize: 16,
    color: '#3A4D39',
    marginBottom: 24,
    lineHeight: 22,
},
button: {
    backgroundColor: '#A7C957',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
},
buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
},
});
