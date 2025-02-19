import React, { useState } from 'react';
import { Animated } from 'react-native';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AuthScreen from './components/AuthScreen';
import HomeScreen from './components/HomeScreen';
import DestinationList from './components/DestinationList';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';

const App = () => {
  const [user, setUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const drawerAnimation = new Animated.Value(0);

  const toggleDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: isDrawerOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderPage = () => {
    if (!user) return <AuthScreen setUser={setUser} />;
    switch (activePage) {
      case 'home':
        return <HomeScreen />;
      case 'destinations':
        return <DestinationList />;
      case 'profile':
        return <ProfileScreen user={user} />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <Header toggleDrawer={toggleDrawer} user={user} setUser={setUser} />
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} setActivePage={setActivePage} />
      {renderPage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
});

export default App;
