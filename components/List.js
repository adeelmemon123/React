import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import {AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import burger1 from '../assets/burger3.jpeg'; // Import the icon component
import burger from '../assets/adeel.jpeg'; 
import burger2 from '../assets/burger2.jpeg'; 


const data = [
  {
    id: 1,
    title: 'Click & Collect First ORDER: FREE WHOPPER WITH PURCHASE OVER £3',
    description: 'A free whopper (642 kcal) with your first purchase using click & ',
    imageUrl:burger1// Use 'require' to load the local image
  },
  {
    id: 2,
    title: '£10.99 X2 WHOPPER/PLANT-BASED WHOPPER MEALS',
    description: '2 WHOPPER meals (602 kcal per meal) or 2 plant-based WHOPPER...',
    imageUrl:burger
  },
  {
    id: 3,
    title: '£10.99 2 CHICKEN/VEGAN ROYALE MEALS',
    description: '2 Chicken Royale meals (883 kcal per meal) or Vegan Royale meals..',
    imageUrl:burger2
  },
];

const Card = ({ title, description, imageUrl }) => (
  <View style={styles.card}>
    <Image source={imageUrl} style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationRow}>
        <MaterialCommunityIcons name="map-marker" size={40} color="black" style={styles.locationIcon} />
        <Text style={styles.locationText}>For item availability</Text>
        <Text style={styles.chooseLocationText}>Choose a Location</Text>
      </View>
      <View style={styles.locationRow1}>
        <View style={styles.circleIconContainer}>
          <AntDesign name="tag" size={24} color="white" style={styles.locationIcon} />
        </View>
        <Text style={styles.chooseLocationText1}>Have a Promo Code?</Text>
      </View>
      <FlatList
  data={data}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Card
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  )}
  contentContainerStyle={{ marginTop:40 }}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the entire screen
    backgroundColor: '#f4ebdc', // Set the background color
  },
  circleIconContainer: {
    width: 40, // Adjust the size as needed to make it a circle
    height: 40, // Adjust the size as needed to make it a circle
    backgroundColor: 'red', // Make sure it's transparent
    borderRadius: 20, // This value should be half of the width/height to make it a circle
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  locationRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:15,
    marginTop:25
    
  },
  chooseLocationText1: {
    fontSize: 25,
    fontWeight: 'bold',
  },
 
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10, 
  },
  chooseLocationText: {
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f4ebdc',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 17,
  },
});

export default List;
