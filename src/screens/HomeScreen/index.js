import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {CATEGORIES, PLACES} from '../../assets';
import COLORS from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconMenu, SmallCards} from '../../components';
import { RECOMMENDED } from '../../assets/data';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'flight',
    };
  }

  clickMenu(value) {
    this.setState({
      category: value,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.headerWrapper}>
            {/* Icon Header */}
            <View style={styles.iconHeaderWrapper}>
              <Feather name="menu" size={24} color={COLORS.white} />
              <MaterialIcons
                name="notifications"
                size={24}
                color={COLORS.white}
              />
            </View>
            {/* Title Header */}
            <View style={styles.titleHeaderWrapper}>
              <Text style={styles.titleHeaderText}>Explore The</Text>
              <Text style={styles.titleHeaderText}>Beautiful Places</Text>
            </View>
            {/* Search Bar Header */}
            <View style={styles.searchBarHeaderWrapper}>
              <MaterialIcons name="search" size={22} color={COLORS.dark} />
              <TextInput placeholder="Search Places" style={styles.textInput} />
            </View>
          </View>

          {/* Menu Icon */}
          <View style={styles.menuIconWrapper}>
            <IconMenu name="flight" type="MaterialIcons" />
            <IconMenu name="umbrella-beach" type="MaterialCommunityIcons" />
            <IconMenu name="navigation-variant" type="MaterialCommunityIcons" />
            <IconMenu name="map-marker" type="MaterialCommunityIcons" />
          </View>

          {/* Places */}
          <View style={styles.placesWrapper}>
            <Text style={styles.headerText}>Places</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.smallCardWrapper}>
              {PLACES.map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate('DetailScreen', {
                      item: item,
                    })
                  }
                  style={styles.placesWrapperMain}>
                  <ImageBackground
                    style={styles.background}
                    source={item.image}>
                    <Text style={styles.header}>{item.name}</Text>
                    <View style={styles.info}>
                      <View style={styles.infoIcon}>
                        <MaterialCommunityIcons
                          name="map-marker"
                          size={20}
                          color={COLORS.white}
                        />
                        <Text style={styles.iconText}>{item.location}</Text>
                      </View>
                      <View style={styles.infoIcon}>
                        <MaterialCommunityIcons
                          name="star"
                          size={20}
                          color={COLORS.white}
                        />
                        <Text style={styles.iconText}>{item.rating}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Recommended */}
          <View style={styles.recommendedWrapper}>
            <Text style={styles.headerText}>Recommended</Text>
            <View style={styles.bigCardWrapper}>
              {RECOMMENDED.map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate('DetailScreen', {
                      item: item,
                    })
                  }
                  style={styles.placesWrapperMain}>
                  <ImageBackground
                    style={styles.backgroundBigCard}
                    source={item.image}>
                    <View style={styles.headerInfo}>
                      <Text style={styles.header}>{item.name}</Text>
                      <View style={styles.infoBigCard}>
                        <View style={styles.infoIcon}>
                          <MaterialCommunityIcons
                            name="map-marker"
                            size={20}
                            color={COLORS.white}
                          />
                          <Text style={styles.iconText}>{item.location}</Text>
                        </View>
                        <View style={styles.infoIcon}>
                          <MaterialCommunityIcons
                            name="star"
                            size={20}
                            color={COLORS.white}
                          />
                          <Text style={styles.iconText}>{item.rating}</Text>
                        </View>
                      </View>
                      <Text style={styles.descriptionInfo}>{item.details}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'column',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 25,
    paddingVertical: 20,
    height: 0.25 * windowHeight,
    justifyContent: 'center',
    position: 'relative',
  },
  iconHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleHeaderWrapper: {},
  titleHeaderText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
    fontSize: 25,
  },
  searchBarHeaderWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    position: 'absolute',
    width: windowWidth * 0.87,
    bottom: windowHeight * -0.028,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  textInput: {
    marginLeft: 10,
    fontFamily: 'Montserrat-Medium',
  },
  menuIconWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: windowHeight * 0.06,
    marginBottom: 25,
    justifyContent: 'space-around',
  },
  placesWrapper: {
    paddingHorizontal: 30,
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  recommendedWrapper: {
    paddingHorizontal: 30,
  },
  smallCardWrapper: {
    flexDirection: 'row',
    paddingVertical: 25,
  },
  placesWrapperMain: {
    borderRadius: 20,
  },
  background: {
    width: 200,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    resizeMode: 'contain',
    overflow: 'hidden',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
  },
  info: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
  infoIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: COLORS.white,
    marginLeft: 5,
    paddingVertical: 5,
  },
  bigCardWrapper: {
    flexDirection: 'column',
    paddingVertical: 25,
  },
  backgroundBigCard: {
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
    overflow: 'hidden',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  infoBigCard: {
    flexDirection: 'row',
    bottom: 10,
    width: '30%',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  descriptionInfo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textAlign: 'justify',
    color: COLORS.white,
    marginTop: 10,
  },
});
