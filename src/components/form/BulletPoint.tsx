import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BulletPoint = () => {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletText}>•</Text>
    </View>
  );
};
export default BulletPoint;
const styles = StyleSheet.create({
  bullet: {
    width: 10,
  },
  bulletText: {
    fontSize: 16,
  },
});
