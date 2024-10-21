import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, ICONS, hp, wp } from '../constants';
import { FormInput } from './form';
import Categories from './Categories';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <View>
          <Text style={styles.greetings}>Welcome Back!</Text>
          <Text style={styles.username}>Alan Becker</Text>
        </View>
        <View style={styles.location}>
          <ICONS.Ionicons name="location-outline" size={18} color="white" />
          <View>
            <Text style={styles.locationText}>Location</Text>
            <Text style={styles.exactLocation}>Madrid, Spain</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View>
          <ICONS.Fontisto
            name="search"
            color={COLORS.primary}
            size={15}
            style={styles.searchIcon}
          />
          <FormInput
            onChangeText={(value: string) => console.log(value)}
            style={styles.searchBar}
            placeholder="Search Event"
          />
        </View>
      </View>
      <Categories />
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    height: hp(30),
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  greetings: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
  },
  username: {
    color: 'white',
    fontSize: 13,
    letterSpacing: 3,
  },
  upperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
    marginTop: hp(4),
  },
  location: {
    flexDirection: 'row',
    gap: 4,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 3,
  },
  exactLocation: {
    color: 'white',
    fontSize: 10,
    letterSpacing: 2,
    textDecorationLine: 'underline',
  },
  searchContainer: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: hp(3),
  },
  searchBar: {
    width: wp(95),
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  searchIcon: {
    marginTop: 15,
    position: 'absolute',
    zIndex: 100,
    paddingLeft: 7,
  },
});
