import React from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Drawer = ({ isDrawerOpen, toggleDrawer, setActivePage }) => {
  const translateX = isDrawerOpen ? 0 : -300;

  return (
    <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
      <ScrollView>
        <TouchableOpacity style={styles.drawerItem} onPress={() => { setActivePage('home'); toggleDrawer(); }}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => { setActivePage('destinations'); toggleDrawer(); }}>
          <MaterialIcons name="book-online" size={24} color="#fff" />
          <Text style={styles.drawerText}>Destinations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => { setActivePage('profile'); toggleDrawer(); }}>
          <MaterialIcons name="book-online" size={24} color="#fff" />
          <Text style={styles.drawerText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => { setActivePage('settings'); toggleDrawer(); }}>
          <MaterialIcons name="book-online" size={24} color="#fff" />
          <Text style={styles.drawerText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => { setActivePage('cardscrollbar'); toggleDrawer(); }}>
          <MaterialIcons name="book-online" size={24} color="#fff" />
          <Text style={styles.drawerText}>scroll bar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => { setActivePage('youtube'); toggleDrawer(); }}>
          <MaterialIcons name="book-online" size={24} color="#fff" />
          <Text style={styles.drawerText}>Youtube</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 300,
    backgroundColor: '#192f6a',
    height: '100%',
    zIndex:5
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  drawerText: { color: '#fff', marginLeft: 15, fontSize: 16 },
});

export default Drawer;
