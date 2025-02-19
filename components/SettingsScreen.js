import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="notifications-outline" size={24} color="#192f6a" />
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="lock-closed-outline" size={24} color="#192f6a" />
        <Text style={styles.text}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="language-outline" size={24} color="#192f6a" />
        <Text style={styles.text}>Language</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#fff', borderRadius: 10, marginBottom: 10 },
  text: { marginLeft: 15, fontSize: 16 },
});

export default SettingsScreen;
