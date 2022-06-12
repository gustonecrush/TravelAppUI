import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../utils';

MaterialCommunityIcons.loadFont();

const SmallCards = ({item}) => {
  return (
    <TouchableOpacity>
      <ImageBackground style={styles.background} source={item.image}>
        <Text style={styles.header}>{item.name}</Text>
        <View style={styles.info}>
          <View style={styles.location}>
            <MaterialCommunityIcons
              name="map-marker"
              size={20}
              color={COLORS.white}
            />
            <Text>{item.location}</Text>
          </View>
          <View style={styles.rating}>
            <MaterialCommunityIcons
              name="star"
              size={20}
              color={COLORS.white}
            />
            <Text>{item.rating}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SmallCards;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: 100,
    height: 250,
  },
});
