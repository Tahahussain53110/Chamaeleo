import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICONS, IMAGES, hp, wp } from '../constants';
import { IEvent } from '../types';

interface IPopularEvents {
  navigation: any;
  event: IEvent;
}

const PopularEvents = ({ navigation, event }: IPopularEvents) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('EventDetails', { event })}
    style={styles.imageContainer}
  >
    <Image source={{ uri: event.image }} style={styles.image} />
    <Text style={styles.typeText}>Event Logistics</Text>
    <ICONS.FontAwesome name="heart" color="red" style={styles.heartIcon} />
    <View style={styles.imageTag}>
      <Text style={styles.tagline}>{event.eventName}</Text>
      <View style={styles.websiteContainer}>
        <View style={styles.dpContainer}>
          <Image source={IMAGES.staff1} style={styles.dp} />
          <Text>{event.website}</Text>
        </View>
        <Text style={styles.link}>Find ticket</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default PopularEvents;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: wp(95),
    height: hp(29),
    borderRadius: 10,
    marginTop: 10,
  },
  typeContainer: {
    position: 'absolute',
    flexDirection: 'row',
  },
  typeText: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    fontSize: 12,
    left: 20,
    top: 20,
    position: 'absolute',
  },
  heartIcon: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
    right: 20,
    top: 20,
    position: 'absolute',
  },
  imageTag: {
    backgroundColor: 'white',
    opacity: 1,
    padding: 10,
    position: 'absolute',
    bottom: 10,
    width: wp(90),
    height: hp(9),
    borderRadius: 10,
  },
  tagline: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  dpContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  dp: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  websiteContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});
