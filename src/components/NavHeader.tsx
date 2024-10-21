import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, ICONS, wp } from '../constants';

interface INavHeader {
  navigation: any;
  heading: string;
}

const NavHeader = ({ navigation, heading }: INavHeader) => (
  <View style={styles.navHeader}>
    <ICONS.AntDesign
      onPress={() => navigation.goBack()}
      name="arrowleft"
      style={styles.backIcon}
      size={18}
    />
    <Text style={styles.navHeading}>{heading}</Text>
    <ICONS.FontAwesome
      name="external-link"
      style={styles.externalIcon}
      size={18}
    />
  </View>
);
export default NavHeader;
const styles = StyleSheet.create({
  navHeader: {
    position: 'absolute',
    zIndex: 100,
    flexDirection: 'row',
    margin: 8,
    opacity: 0.7,
  },
  navHeading: {
    marginLeft: wp(25),
    fontWeight: '500',
    color: COLORS.primary,
    marginTop: 2,
    letterSpacing: 3,
  },
  backIcon: {
    zIndex: 10,
    padding: 6,
    color: COLORS.primary,
    borderRadius: 40,
  },
  externalIcon: {
    marginLeft: wp(28),
    marginTop: 2,
    color: COLORS.primary,
  },
});
