import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../utils';

Feather.loadFont();

const DetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.image} style={styles.headerWrapper}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={40} color={COLORS.white} />
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={40}
            color={COLORS.white}
          />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.textHeader}>{item.name}</Text>
          <View style={styles.ratingWrapper}>
            <MaterialCommunityIcons
              name="star"
              size={25}
              color={COLORS.orange}
            />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.location}>
          <MaterialCommunityIcons
            name="map-marker"
            size={35}
            color={COLORS.primary}
          />
          <Text style={styles.textLocation}>{item.location}</Text>
        </View>
        <Text style={styles.headerDescription}>About The Trip ✨</Text>
        <Text style={styles.descriptions}>{item.details}</Text>
      </View>

      <View style={styles.priceWrapper}>
        <Text style={styles.price}>
          <Text style={styles.highlight}>${item.price}</Text> / PER DAY
        </Text>
        <TouchableOpacity
          onPress={() => alert('You have been booked! See You 👋🏻')}
          style={styles.containerBtn}>
          <Text style={styles.textBtn}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerWrapper: {
    height: 500,
    justifyContent: 'center',
    padding: 10,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    width: '100%',
    alignSelf: 'center',
  },
  infoWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textHeader: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    width: '70%',
  },
  ratingWrapper: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  ratingText: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
    marginTop: 5,
    marginLeft: 10,
  },
  descriptionWrapper: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -0.05 * windowHeight,
    paddingBottom: 50,
  },
  location: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 40,
    alignItems: 'center',
  },
  textLocation: {
    color: COLORS.primary,
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 5,
  },
  headerDescription: {
    paddingHorizontal: 25,
    marginTop: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  descriptions: {
    paddingHorizontal: 25,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'justify',
    marginTop: 20,
  },
  containerBtn: {
    backgroundColor: COLORS.white,
    width: 130,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  textBtn: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.primary,
  },
  priceWrapper: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    paddingTop: 10,
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  price: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: COLORS.white,
    marginTop: 10,
  },
  highlight: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  }
});
