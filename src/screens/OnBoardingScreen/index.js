import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {Background} from '../../assets';
import Buttons from '../../components/Buttons';
import COLORS from '../../utils';

const OnBoardingScreen = ({navigation}) => {
  return (
    <ImageBackground source={Background} style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Discover </Text>
          <Text style={styles.header}>World With Us</Text>
        </View>
        <Text style={styles.description}>
          The World is a book and those who do not travel read only one page.
          Find the best place and destination. Enjoy your life!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.containerBtn}>
          <Text style={styles.textBtn}>Get Started</Text>
        </TouchableOpacity>
        {/* <Buttons title="Get Started" page="HomeScreen" /> */}
      </View>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'column',
    marginTop: 50,
    paddingHorizontal: 40,
    paddingVertical: 50,
    position: 'absolute',
    bottom: 150,
  },
  headerWrapper: {
    marginBottom: 15,
  },
  header: {
    fontSize: 35,
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
  },
  description: {
    fontSize: 15,
    color: COLORS.white,
    textAlign: 'justify',
    marginBottom: 20,
    fontFamily: 'Montserrat-Regular',
  },
  containerBtn: {
    backgroundColor: COLORS.white,
    width: 130,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.primary,
  },
});
