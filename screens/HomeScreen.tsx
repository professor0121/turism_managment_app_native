// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   TextInput,
//   Dimensions,
//   Animated,
// } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width, height } = Dimensions.get('window');

// const TourismApp = () => {
//   // State declarations
//   const [user, setUser] = useState(null);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('home');
//   const [activePage, setActivePage] = useState('home');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoginMode, setIsLoginMode] = useState(true);
//   const [destinations, setDestinations] = useState([]);
//   const drawerAnimation = new Animated.Value(0);

//   // Auth states
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   useEffect(() => {
//     const defaultDestinations = [
//       { name: "Paris", description: "City of Light with iconic Eiffel Tower and world-class cuisine" },
//       { name: "Bali", description: "Tropical paradise with beautiful beaches and rich cultural heritage" },
//       { name: "Tokyo", description: "Modern metropolis with rich culture and cutting-edge technology" },
//       { name: "Santorini", description: "Stunning Greek island with white architecture and sunset views" },
//       { name: "Machu Picchu", description: "Ancient Incan city in the Andes with breathtaking mountain views" },
//       { name: "Dubai", description: "Ultra-modern city with luxurious shopping and desert adventures" },
//       { name: "New York", description: "The Big Apple with iconic skyline and diverse cultural experiences" },
//       { name: "Venice", description: "Romantic city of canals with historic architecture and gondola rides" }
//     ];
    
//     setDestinations(defaultDestinations);
//   }, []);

//   const toggleDrawer = () => {
//     const toValue = isDrawerOpen ? 0 : 1;
//     Animated.timing(drawerAnimation, {
//       toValue,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const handleLogin = () => {
//     setUser({ name: 'John Doe', email: email, role: 'user' });
//   };

//   const handleRegister = () => {
//     setUser({ name: name, email: email, role: 'user' });
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   const renderAuthScreen = () => (
//     <View style={styles.authContainer}>
//       <LinearGradient
//         colors={['#4c669f', '#3b5998', '#192f6a']}
//         style={styles.authGradient}>
//         <View style={styles.authForm}>
//           <Text style={styles.authTitle}>
//             {isLoginMode ? 'Welcome Back' : 'Create Account'}
//           </Text>
//           {!isLoginMode && (
//             <TextInput
//               style={styles.input}
//               placeholder="Full Name"
//               value={name}
//               onChangeText={setName}
//               placeholderTextColor="#rgba(255,255,255,0.7)"
//             />
//           )}
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             placeholderTextColor="#rgba(255,255,255,0.7)"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             placeholderTextColor="#rgba(255,255,255,0.7)"
//           />
//           <TouchableOpacity
//             style={styles.authButton}
//             onPress={isLoginMode ? handleLogin : handleRegister}>
//             <Text style={styles.authButtonText}>
//               {isLoginMode ? 'Login' : 'Register'}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setIsLoginMode(!isLoginMode)}>
//             <Text style={styles.switchModeText}>
//               {isLoginMode
//                 ? "Don't have an account? Register"
//                 : 'Already have an account? Login'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>
//     </View>
//   );

//   const renderHeader = () => (
//     <View style={styles.header}>
//       <TouchableOpacity onPress={toggleDrawer}>
//         <MaterialIcons name="menu" size={28} color="#fff" />
//       </TouchableOpacity>
//       <Text style={styles.headerTitle}>Tourism Explorer</Text>
//       {user && (
//         <TouchableOpacity onPress={handleLogout}>
//           <MaterialIcons name="logout" size={24} color="#fff" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   const renderDrawer = () => {
//     const translateX = drawerAnimation.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-300, 0],
//     });

//     return (
//       <Animated.View
//         style={[
//           styles.drawer,
//           {
//             transform: [{ translateX }],
//           },
//         ]}>
//         <View style={styles.drawerHeader}>
//           <View style={styles.drawerUserInfo}>
//             <View style={styles.userAvatar}>
//               <Text style={styles.userAvatarText}>
//                 {user?.name?.charAt(0) || 'G'}
//               </Text>
//             </View>
//             <Text style={styles.drawerUserName}>{user?.name || 'Guest'}</Text>
//             <Text style={styles.drawerUserEmail}>{user?.email || ''}</Text>
//           </View>
//         </View>
//         <ScrollView style={styles.drawerContent}>
//           <TouchableOpacity
//             style={[styles.drawerItem, activePage === 'home' && styles.drawerItemActive]}
//             onPress={() => {
//               setActivePage('home');
//               toggleDrawer();
//             }}>
//             <Ionicons name="home-outline" size={24} color="#fff" />
//             <Text style={styles.drawerItemText}>Home</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.drawerItem, activePage === 'destinations' && styles.drawerItemActive]}
//             onPress={() => {
//               setActivePage('destinations');
//               toggleDrawer();
//             }}>
//             <FontAwesome5 name="map-marked-alt" size={24} color="#fff" />
//             <Text style={styles.drawerItemText}>Destinations</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.drawerItem, activePage === 'bookings' && styles.drawerItemActive]}
//             onPress={() => {
//               setActivePage('bookings');
//               toggleDrawer();
//             }}>
//             <MaterialIcons name="book-online" size={24} color="#fff" />
//             <Text style={styles.drawerItemText}>My Bookings</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.drawerItem, activePage === 'profile' && styles.drawerItemActive]}
//             onPress={() => {
//               setActivePage('profile');
//               toggleDrawer();
//             }}>
//             <Ionicons name="person-outline" size={24} color="#fff" />
//             <Text style={styles.drawerItemText}>My Profile</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.drawerItem, activePage === 'favorites' && styles.drawerItemActive]}
//             onPress={() => {
//               setActivePage('favorites');
//               toggleDrawer();
//             }}>
//             <Ionicons name="heart-outline" size={24} color="#fff" />
//             <Text style={styles.drawerItemText}>Favorites</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.drawerItem, activePage === 'settings' && styles.drawerItemActive]}
//             onPress={() => {
//               setActivePage('settings');
//               toggleDrawer();
//             }}>
//             <Ionicons name="settings-outline" size={24} color="#fff" />
//             <Text style={styles.drawerItemText}>Settings</Text>
//           </TouchableOpacity>

//           {user?.role === 'admin' && (
//             <>
//               <View style={styles.drawerDivider} />
//               <Text style={styles.drawerSectionTitle}>Admin Controls</Text>
              
//               <TouchableOpacity
//                 style={[styles.drawerItem, activePage === 'manage-users' && styles.drawerItemActive]}
//                 onPress={() => {
//                   setActivePage('manage-users');
//                   toggleDrawer();
//                 }}>
//                 <MaterialIcons name="people-outline" size={24} color="#fff" />
//                 <Text style={styles.drawerItemText}>Manage Users</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.drawerItem, activePage === 'manage-destinations' && styles.drawerItemActive]}
//                 onPress={() => {
//                   setActivePage('manage-destinations');
//                   toggleDrawer();
//                 }}>
//                 <MaterialIcons name="edit-location-alt" size={24} color="#fff" />
//                 <Text style={styles.drawerItemText}>Manage Destinations</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.drawerItem, activePage === 'analytics' && styles.drawerItemActive]}
//                 onPress={() => {
//                   setActivePage('analytics');
//                   toggleDrawer();
//                 }}>
//                 <Ionicons name="stats-chart" size={24} color="#fff" />
//                 <Text style={styles.drawerItemText}>Analytics</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </ScrollView>
//       </Animated.View>
//     );
//   };

//   const renderHomeContent = () => (
//     <View style={styles.mainContent}>
//       <View style={styles.tabContainer}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <TouchableOpacity 
//             style={[styles.tab, activeTab === 'discover' && styles.activeTab]} 
//             onPress={() => setActiveTab('discover')}>
//             <Ionicons name="compass-outline" size={24} color={activeTab === 'discover' ? '#192f6a' : '#666'} />
//             <Text style={[styles.tabText, activeTab === 'discover' && styles.activeTabText]}>Discover</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             style={[styles.tab, activeTab === 'popular' && styles.activeTab]} 
//             onPress={() => setActiveTab('popular')}>
//             <Ionicons name="star-outline" size={24} color={activeTab === 'popular' ? '#192f6a' : '#666'} />
//             <Text style={[styles.tabText, activeTab === 'popular' && styles.activeTabText]}>Popular</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             style={[styles.tab, activeTab === 'nearby' && styles.activeTab]} 
//             onPress={() => setActiveTab('nearby')}>
//             <Ionicons name="location-outline" size={24} color={activeTab === 'nearby' ? '#192f6a' : '#666'} />
//             <Text style={[styles.tabText, activeTab === 'nearby' && styles.activeTabText]}>Nearby</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             style={[styles.tab, activeTab === 'saved' && styles.activeTab]} 
//             onPress={() => setActiveTab('saved')}>
//             <Ionicons name="bookmark-outline" size={24} color={activeTab === 'saved' ? '#192f6a' : '#666'} />
//             <Text style={[styles.tabText, activeTab === 'saved' && styles.activeTabText]}>Saved</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>

//       <View style={styles.searchContainer}>
//         <Ionicons name="search-outline" size={24} color="#666" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search destinations..."
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           placeholderTextColor="#666"
//         />
//       </View>

//       {activeTab === 'discover' && (
//         <ScrollView style={styles.contentContainer}>
//           <View style={styles.welcomeSection}>
//             <Image
//               source={{
//                 uri: `https://api.a0.dev/assets/image?text=beautiful landscape with mountains and lakes&aspect=16:9`,
//               }}
//               style={styles.welcomeImage}
//             />
//             <Text style={styles.welcomeText}>
//               Welcome to Tourism Explorer{user?.name ? `, ${user.name}` : ''}!
//             </Text>
//           </View>
//           <View style={styles.featuredSection}>
//             <Text style={styles.sectionTitle}>Featured Destinations</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {destinations.map((dest, index) => (
//                 <TouchableOpacity key={index} style={styles.destinationCard}>
//                   <Image
//                     source={{
//                       uri: `https://api.a0.dev/assets/image?text=${dest.name} tourist destination&aspect=4:3`,
//                     }}
//                     style={styles.destinationImage}
//                   />
//                   <Text style={styles.destinationName}>{dest.name}</Text>
//                   <Text style={styles.destinationDesc} numberOfLines={2}>
//                     {dest.description}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         </ScrollView>
//       )}
//     </View>
//   );

//   const renderPageContent = () => {
//     switch (activePage) {
//       case 'home':
//         return renderHomeContent();
//       case 'destinations':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>Explore Destinations</Text>
//             <ScrollView>
//               {destinations.map((dest, index) => (
//                 <TouchableOpacity key={index} style={styles.destinationListItem}>
//                   <Image
//                     source={{
//                       uri: `https://api.a0.dev/assets/image?text=${dest.name} tourist destination&aspect=16:9`,
//                     }}
//                     style={styles.destinationListImage}
//                   />
//                   <View style={styles.destinationListInfo}>
//                     <Text style={styles.destinationListName}>{dest.name}</Text>
//                     <Text style={styles.destinationListDesc} numberOfLines={2}>
//                       {dest.description}
//                     </Text>
//                     <TouchableOpacity style={styles.exploreButton}>
//                       <Text style={styles.exploreButtonText}>Explore</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         );
//       case 'bookings':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>My Bookings</Text>
//             <View style={styles.emptyState}>
//               <Ionicons name="calendar-outline" size={64} color="#192f6a" />
//               <Text style={styles.emptyStateText}>No bookings yet</Text>
//               <TouchableOpacity 
//                 style={styles.emptyStateButton}
//                 onPress={() => setActivePage('destinations')}>
//                 <Text style={styles.emptyStateButtonText}>Explore Destinations</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       case 'profile':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>My Profile</Text>
//             <View style={styles.profileCard}>
//               <View style={styles.profileHeader}>
//                 <View style={styles.profileAvatar}>
//                   <Text style={styles.profileAvatarText}>{user?.name?.charAt(0) || 'U'}</Text>
//                 </View>
//                 <Text style={styles.profileName}>{user?.name}</Text>
//                 <Text style={styles.profileEmail}>{user?.email}</Text>
//               </View>
//               <View style={styles.profileStats}>
//                 <View style={styles.statItem}>
//                   <Text style={styles.statNumber}>0</Text>
//                   <Text style={styles.statLabel}>Trips</Text>
//                 </View>
//                 <View style={styles.statItem}>
//                   <Text style={styles.statNumber}>0</Text>
//                   <Text style={styles.statLabel}>Reviews</Text>
//                 </View>
//                 <View style={styles.statItem}>
//                   <Text style={styles.statNumber}>0</Text>
//                   <Text style={styles.statLabel}>Points</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         );
//       case 'favorites':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>My Favorites</Text>
//             <View style={styles.emptyState}>
//               <Ionicons name="heart-outline" size={64} color="#192f6a" />
//               <Text style={styles.emptyStateText}>No favorites yet</Text>
//               <TouchableOpacity 
//                 style={styles.emptyStateButton}
//                 onPress={() => setActivePage('destinations')}>
//                 <Text style={styles.emptyStateButtonText}>Discover Places</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       case 'settings':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>Settings</Text>
//             <View style={styles.settingsList}>
//               <TouchableOpacity style={styles.settingItem}>
//                 <Ionicons name="notifications-outline" size={24} color="#192f6a" />
//                 <Text style={styles.settingText}>Notifications</Text>
//                 <Ionicons name="chevron-forward" size={24} color="#666" />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.settingItem}>
//                 <Ionicons name="lock-closed-outline" size={24} color="#192f6a" />
//                 <Text style={styles.settingText}>Privacy</Text>
//                 <Ionicons name="chevron-forward" size={24} color="#666" />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.settingItem}>
//                 <Ionicons name="language-outline" size={24} color="#192f6a" />
//                 <Text style={styles.settingText}>Language</Text>
//                 <Ionicons name="chevron-forward" size={24} color="#666" />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.settingItem}>
//                 <Ionicons name="help-circle-outline" size={24} color="#192f6a" />
//                 <Text style={styles.settingText}>Help & Support</Text>
//                 <Ionicons name="chevron-forward" size={24} color="#666" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       case 'manage-users':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>Manage Users</Text>
//             <View style={styles.adminCard}>
//               <Text style={styles.adminText}>Total Users: 0</Text>
//               <TouchableOpacity style={styles.adminButton}>
//                 <Text style={styles.adminButtonText}>Add New User</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       case 'manage-destinations':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>Manage Destinations</Text>
//             <View style={styles.adminCard}>
//               <Text style={styles.adminText}>Total Destinations: {destinations.length}</Text>
//               <TouchableOpacity style={styles.adminButton}>
//                 <Text style={styles.adminButtonText}>Add New Destination</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         );
//       case 'analytics':
//         return (
//           <View style={styles.pageContainer}>
//             <Text style={styles.pageTitle}>Analytics Dashboard</Text>
//             <View style={styles.analyticsContainer}>
//               <View style={styles.analyticsCard}>
//                 <Text style={styles.analyticsLabel}>Total Bookings</Text>
//                 <Text style={styles.analyticsValue}>0</Text>
//               </View>
//               <View style={styles.analyticsCard}>
//                 <Text style={styles.analyticsLabel}>Active Users</Text>
//                 <Text style={styles.analyticsValue}>0</Text>
//               </View>
//               <View style={styles.analyticsCard}>
//                 <Text style={styles.analyticsLabel}>Revenue</Text>
//                 <Text style={styles.analyticsValue}>$0</Text>
//               </View>
//             </View>
//           </View>
//         );
//       default:
//         return renderHomeContent();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {renderHeader()}
//       {renderDrawer()}
//       {!user ? renderAuthScreen() : renderPageContent()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#192f6a',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     elevation: 5,
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   drawer: {
//     position: 'absolute',
//     top: 60,
//     left: 0,
//     bottom: 0,
//     width: 300,
//     backgroundColor: '#192f6a',
//     zIndex: 1000,
//   },
//   drawerHeader: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ffffff20',
//   },
//   drawerUserInfo: {
//     alignItems: 'center',
//   },
//   userAvatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#ffffff20',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   userAvatarText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   drawerUserName: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   drawerUserEmail: {
//     color: '#ffffff80',
//     fontSize: 14,
//   },
//   drawerContent: {
//     flex: 1,
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ffffff10',
//   },
//   drawerItemActive: {
//     backgroundColor: '#ffffff20',
//   },
//   drawerItemText: {
//     color: '#fff',
//     marginLeft: 15,
//     fontSize: 16,
//   },
//   drawerDivider: {
//     height: 1,
//     backgroundColor: '#ffffff20',
//     marginVertical: 10,
//   },
//   drawerSectionTitle: {
//     color: '#ffffff80',
//     fontSize: 12,
//     marginLeft: 15,
//     marginTop: 5,
//     marginBottom: 5,
//   },
//   mainContent: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   authContainer: {
//     flex: 1,
//   },
//   authGradient: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   authForm: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     padding: 20,
//     borderRadius: 10,
//     width: '100%',
//     maxWidth: 400,
//     alignSelf: 'center',
//   },
//   authTitle: {
//     fontSize: 24,
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   input: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     color: '#fff',
//   },
//   authButton: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   authButtonText: {
//     color: '#192f6a',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   switchModeText: {
//     color: '#fff',
//     textAlign: 'center',
//     marginTop: 15,
//   },
//   tabContainer: {
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   tab: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     marginHorizontal: 5,
//     borderRadius: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   activeTab: {
//     backgroundColor: '#e6eeff',
//   },
//   tabText: {
//     marginLeft: 5,
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#192f6a',
//     fontWeight: 'bold',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     margin: 15,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 12,
//     fontSize: 16,
//     color: '#333',
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   welcomeSection: {
//     padding: 15,
//   },
//   welcomeImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#192f6a',
//   },
//   featuredSection: {
//     padding: 15,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#192f6a',
//     marginBottom: 15,
//   },
//   destinationCard: {
//     width: 280,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginRight: 15,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   destinationImage: {
//     width: '100%',
//     height: 180,
//   },
//   destinationName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     padding: 10,
//     color: '#192f6a',
//   },
//   destinationDesc: {
//     fontSize: 14,
//     color: '#666',
//     paddingHorizontal: 10,
//     paddingBottom: 10,
//   },
//   pageContainer: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#f5f5f5',
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#192f6a',
//     marginBottom: 20,
//   },
//   destinationListItem: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     overflow: 'hidden',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   destinationListImage: {
//     width: '100%',
//     height: 200,
//   },
//   destinationListInfo: {
//     padding: 15,
//   },
//   destinationListName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#192f6a',
//     marginBottom: 5,
//   },
//   destinationListDesc: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 10,
//   },
//   exploreButton: {
//     backgroundColor: '#192f6a',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   exploreButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   emptyState: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   emptyStateText: {
//     fontSize: 18,
//     color: '#666',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   emptyStateButton: {
//     backgroundColor: '#192f6a',
//     padding: 15,
//     borderRadius: 25,
//     minWidth: 200,
//     alignItems: 'center',
//   },
//   emptyStateButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   profileCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   profileHeader: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileAvatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#192f6a',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   profileAvatarText: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: 'bold',
//   },
//   profileName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#192f6a',
//   },
//   profileEmail: {
//     fontSize: 16,
//     color: '#666',
//   },
//   profileStats: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     paddingTop: 20,
//   },  statItem: {
//     alignItems: 'center',
//   },
//   // Additional styles
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
// });

// export default TourismApp;