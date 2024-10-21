import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, IMAGES, hp, wp } from '../constants';
import { DayDetails, NavHeader } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

interface IEventDetails {
  navigation: any;
  route: any;
}
const EventDetails = ({ navigation, route }: IEventDetails) => {
  const { event } = route.params;
  return (
    <ScrollView>
      <View style={styles.image}>
        <NavHeader heading="Event Detail" navigation={navigation} />
        <Image source={IMAGES.staff1} style={styles.image} />
      </View>
      <View style={styles.imageTag}>
        <Text style={styles.tagline}>{event.eventName}</Text>
        <View style={styles.websiteContainer}>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Image source={IMAGES.staff1} style={styles.dp} />
            <Text>{event.website}</Text>
          </View>
          <Text style={styles.link}>Register Now</Text>
        </View>
        <Text style={styles.eventDate}>{event.startDate}</Text>
        <Text style={styles.location}>{event.location}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.tagline}>About this event</Text>
        <Text>(Event manager: {event.manager})</Text>
        <DayDetails agenda={event.day1} dayNumber={1} />
        <DayDetails agenda={event.day2} dayNumber={2} />
      </View>
    </ScrollView>
  );
};
export default EventDetails;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: wp(100),
    height: hp(29),
  },
  imageTag: {
    backgroundColor: 'white',
    opacity: 1,
    padding: 10,
    bottom: 10,
    width: wp(90),
    height: hp(14),
    borderRadius: 10,
    marginLeft: 19,
    marginTop: -50,
  },
  tagline: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
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
    backgroundColor: COLORS.primary,
    color: 'white',
    fontSize: 12,
    padding: 8,
    borderRadius: 8,
  },
  location: {
    fontSize: 10,
    letterSpacing: 2,
    marginLeft: 24,
    textDecorationLine: 'underline',
  },
  eventDate: {
    fontSize: 12,
    marginLeft: 25,
    marginTop: -8,
  },
  details: {
    marginLeft: 22,
  },
});
