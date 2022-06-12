import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../utils';

Feather.loadFont();
MaterialIcons.loadFont();

const IconMenu = ({name, active, onPress, type}) => {
  return (
    <TouchableOpacity style={styles.iconWrapper(active)} onPress={onPress}>
      {type == 'MaterialIcons' ? (
        <MaterialIcons
          name={name}
          size={22}
          color={active ? COLORS.white : COLORS.primary}
        />
      ) : (
        <MaterialCommunityIcons
          name={name}
          size={24}
          color={active ? COLORS.white : COLORS.primary}
        />
      )}
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  iconWrapper: active => ({
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: active ? COLORS.primary : COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
