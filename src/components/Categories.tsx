import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { wp } from '../constants';

const Categories = () => {
  const categories = ['Concert', 'Sports', 'Festival', 'Theater'];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.button}>
          <Text style={styles.category}>{category}</Text>
        </View>
      ))}
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    width: wp(22),
    padding: 8,
    borderRadius: 6,
  },
  category: {
    textAlign: 'center',
  },
});
