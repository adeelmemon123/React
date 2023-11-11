import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Address from './components/Address';
import List from './components/List';
// import HomePage from './components/HomePage';

const window = Dimensions.get('window');
const topPercentage = 8; // Set the desired top position as a percentage

const App = () => {
  const topPosition = (window.height * topPercentage) / 100;

  return (
    <View style={[styles.container, { top: topPosition }]}>
      {/* <Address /> */}
      <List />
      {/* <HomePage/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    height: window.height,
    position: 'absolute',
  },
});

export default App;
