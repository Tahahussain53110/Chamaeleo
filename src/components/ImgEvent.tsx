import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { hp, wp } from '../constants';

const ImgEvent = ({ img }: { img: ImageSourcePropType }) => {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.img} source={img} />
      <Text style={styles.imgTag}>Service Staff</Text>
    </View>
  );
};
export default ImgEvent;

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
    width: wp(47),
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
