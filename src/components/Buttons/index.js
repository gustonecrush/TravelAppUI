import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../utils';

const Buttons = ({navigation, title, page}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HomeScreen')}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: 130,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
});
