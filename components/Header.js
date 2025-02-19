import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ toggleDrawer, user, setUser }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleDrawer}>
        <MaterialIcons name="menu" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Tourism Explorer</Text>
      {user && (
        <TouchableOpacity onPress={() => setUser(null)}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop:40,
    height: 100,
    backgroundColor: '#192f6a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});

export default Header;
