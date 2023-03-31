import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProgressCircle from 'react-native-progress-circle';

import React, {useState} from 'react';
const Help = [
  {
    id: 1,
    product: 'NGO',
    image: require('../components/ngo.png'),
    screen: 'NgoScreen',
  },
  {
    id: 2,
    product: 'Police Station',
    image: require('../components/policestation.png'),
    screen: 'NgoScreen',
  },
  {
    id: 3,
    product: 'IPCs',
    image: require('../components/ipc.png'),
    screen: 'Awareness',
  },
];

const SeverityScreen = ({route, navigation}) => {
  const num = parseInt((route.params.totalmarks / 35) * 100).toFixed(0);
  const [Suggestion, setSuggestion] = useState(num>85 ? "Police Station" : "NGO")
  return (
    <View style={styles.maincontainer}>
      {/* <ScrollView> */}
      <View style={styles.UpperContainer}>
        <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Severity of your case!</Text>
        </View>
      </View>
      <View style={styles.topcontainer}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <ProgressCircle
            percent={num}
            radius={60}
            borderWidth={10}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#FFF2F2">
            <Text style={{fontSize: 18, color: 'black'}}>{num}%</Text>
          </ProgressCircle>
        </View>
        <View style={styles.accordingtous}>
          <Text style={styles.cardtxt}>
            You're severity according to the answers given is:{' '}
            <Text style={{color: 'red'}}>{route.params.totalmarks}/35</Text>{' '}
            {'\n'}
            {'\n'}Percentage:{' '}
            <Text style={{color: 'red'}}>
              {((route.params.totalmarks / 35) * 100).toFixed(2)}%
            </Text>
            {'\n'}
            {'\n'}According to the Severity of your case we recommend you to
            contact:{' '}
          </Text>

          <View style={styles.solution}>
            <TouchableOpacity style={styles.btn} onPress={() =>navigation.navigate('NgoScreen', {titlename:Suggestion})}>
              <Text style={{color: 'black'}}>{Suggestion}</Text>
              <FontAwesome5 name="angle-right" color="black" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomcontainer}>
        <View style={styles.GetHelpSection}>
          <View>
            <Text style={styles.categorytitleText}>
              You can also reach at:{' '}
            </Text>
          </View>
          <View style={styles.Scards}>
            {Help.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  onPress={() => navigation.navigate(item.screen)}>
                  <View style={styles.Featuredcard}>
                    <View style={styles.FeaturedimageContainer}>
                      <Image source={item.image} style={styles.FeaturedImage} />
                    </View>
                    <View style={styles.FeaturedTextContainer}>
                      <Text style={styles.featureText}>{item.product}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default SeverityScreen;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#FFF2F2',
    flex: 1,
  },
  UpperContainer: {
    height: 60,
    backgroundColor: '#EEE6FF',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    // justifyContent:"space-around"
  },
  backbuttonContainer: {
    marginLeft: 10,
  },
  TitleContainer: {},
  HeadingText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  topcontainer: {},
  bottomcontainer: {
    width: '100%',
    marginTop: -80,
  },

  categorytitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Cochin',
  },
  GetHelpSection: {
    paddingHorizontal: 20,
  },

  accordingtous: {
    height: '47%',
    backgroundColor: '#F5EAF8',
    elevation: 2,
    borderRadius: 20,
    marginTop: 30,
  },
  solution: {
    width: '90%',
    padding: 15,
    backgroundColor: '#fff',
    height: 55,
    alignSelf: 'center',
    elevation: 2,
    borderRadius: 10,
  },

  cardtxt: {
    color: 'black',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  Featuredcard: {
    height: 150,
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15%',
    backgroundColor: '#F5EAF8',
    borderRadius: 10,
    elevation: 2,
  },
  FeaturedimageContainer: {},
  FeaturedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  FeaturedTextContainer: {
    marginTop: 10,
  },
  featureText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  Scards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
