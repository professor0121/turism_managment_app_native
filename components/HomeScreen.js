import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations([
      { name: "Paris", description: "City of Light with Eiffel Tower", image: "https://source.unsplash.com/400x300/?paris" },
      { name: "Bali", description: "Tropical paradise with beaches", image: "https://source.unsplash.com/400x300/?bali" },
      { name: "Tokyo", description: "Modern metropolis", image: "https://source.unsplash.com/400x300/?tokyo" },
    ]);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search destinations..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <Text style={styles.sectionTitle}>Featured Destinations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationContainer}>
        {destinations.map((dest, index) => (
          <TouchableOpacity key={index} style={styles.destinationCard}>
            <Image source={{ uri: dest.image }} style={styles.destinationImage} />
            <Text style={styles.destinationName}>{dest.name}</Text>
            <Text style={styles.destinationDesc}>{dest.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 15 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  destinationContainer: { flexDirection: 'row' },
  destinationCard: { width: 250, backgroundColor: '#fff', borderRadius: 10, marginRight: 15, padding: 10, elevation: 3 },
  destinationImage: { width: '100%', height: 150, borderRadius: 10 },
  destinationName: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  destinationDesc: { fontSize: 14, color: '#666' },
});

export default HomeScreen;
