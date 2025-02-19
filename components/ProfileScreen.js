import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.card}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 3 },
  name: { fontSize: 20, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#666' },
});

export default ProfileScreen;
