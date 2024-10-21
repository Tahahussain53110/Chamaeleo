import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, Loader, PopularEvents, UpcommingEvents } from '../components';
import { COLORS, hp, wp } from '../constants';
import { EventsContext } from '../context/eventContext';

const Home = ({ navigation }: any) => {
  const { event } = useContext(EventsContext);

  return (
    <ScrollView>
      <Header />
      {event.image ? (
        <View>
          <View style={styles.bodyHeader}>
            <Text style={styles.heading}>Popular Events</Text>
            <Text style={styles.link}>See all</Text>
          </View>
          <PopularEvents event={event} navigation={navigation} />
          <View style={styles.bodyHeader}>
            <Text style={styles.heading}>Upcomming Events</Text>
            <Text style={styles.link}>See all</Text>
          </View>
          <UpcommingEvents />
          <UpcommingEvents />
        </View>
      ) : (
        <View style={{ marginTop: hp(20) }}>
          <Loader />
        </View>
      )}
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  bodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: hp(2),
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  link: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
});
