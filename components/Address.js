import React, { useState } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons or any other icon library

const FirstRoute = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#f4ebdc' }}>
    <Image
      source={require('../assets/girl.jpeg')} // Replace 'your-image.png' with the actual image source
      style={styles.image}
    />
    <Text style={styles.title}>Find a Location Nearby</Text>
    <Text style={styles.description}>Let us know where you are so we can {'\n'} recommend nearby locations.</Text>
    <TouchableOpacity style={styles.shareButton}>
      <Text style={styles.shareButtonText}>  Share Location</Text>
    </TouchableOpacity>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Second Route</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Third Route</Text>
  </View>
);

const initialLayout = { width: 320 };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'red' }}
    style={{ backgroundColor: 'white' }}
    labelStyle={styles.tabTitle}
  />
);

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform your search logic here using the searchText state
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
         <View style={styles.labelContainer}>
                <Text>Your Address</Text>
            </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Nearby' },
    { key: 'second', title: 'Favourites' },
    { key: 'third', title: 'Recents' }
  ]);

  return (
    <View style={styles.container}>
      <SearchBar />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    labelContainer: {
        backgroundColor: "white", // Same color as background
        alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 3, // Amount of spacing between border and first/last letter
        marginStart: 10, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
    },
    image: {
        width: 200, // Set the desired width
        height: 250, // Set the desired height
        marginBottom: 20,
      },
  container: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  tabTitle: {
    fontSize: 16,
    color: 'black',
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 20,
  },
  shareButton: {
    backgroundColor: '#d52001',
    padding: 10,
    borderRadius: 25,
    fontWeight: 'bold',
  },
  shareButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
