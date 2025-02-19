import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations([
      { name: "Santorini", description: "Beautiful Greek Island", image: "https://source.unsplash.com/400x300/?santorini" },
      { name: "Dubai", description: "Luxury city in the desert", image: "https://source.unsplash.com/400x300/?dubai" },
      { name: "New York", description: "The Big Apple", image: "https://source.unsplash.com/400x300/?newyork" },
    ]);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>
      {destinations.map((dest, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={{ uri: dest.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{dest.name}</Text>
            <Text style={styles.desc}>{dest.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 15, elevation: 3 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  info: { padding: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  desc: { fontSize: 14, color: '#666' },
});

export default DestinationList;
