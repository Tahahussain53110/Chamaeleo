import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IMAGES, hp, wp } from '../constants';
import ImgEvent from './ImgEvent';

const UpcommingEvents = () => (
  <View style={styles.container}>
    <ImgEvent img={IMAGES.staff2} />
    <ImgEvent img={IMAGES.staff3} />
  </View>
);

export default UpcommingEvents;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(2),
    marginTop: 10,
  },
  imgContainer: {
    position: 'relative',
  },
  img: {
    height: hp(20),
    width: wp(45),
    borderRadius: 10,
    position: 'relative',
  },
  imgTag: {
    position: 'absolute',
    backgroundColor: 'white',
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
  },
});
