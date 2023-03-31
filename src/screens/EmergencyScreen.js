import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';

const EmergencyScreen = ({navigation}) => {
  const [PoliceStation, setPoliceStation] = useState([]);

  useEffect(() => {
    const getPoliceStation = async () => {
      try {
        const PoliceStationList = [];
        await firestore()
          .collection('HelpSection')
          .doc('BmaSO2oNkzt7YfRoQecJ')
          .collection('PoliceStationData')
          .orderBy('distance')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {address, distance, id, name, phone} = doc.data();
              PoliceStationList.push({
                address,
                distance,
                id,
                name,
                phone,
              });
            });
          });
        setPoliceStation(PoliceStationList);
        console.log(PoliceStationList);
      } catch (error) {
        console.log(error);
      }
    };

    getPoliceStation();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity   onPress={() =>navigation.replace('Bottomtab')}>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Nearest Police Stations</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.lowerContainer}>
          <View style={styles.cardContainer}>
            {PoliceStation.map((item, index) => {
              return (
                <View style={styles.Card} key={index}>
                  <View style={styles.NameAndDistance}>
                    <Text style={styles.PoliceStationName}>{item.name}</Text>
                    <Text style={styles.PoliceStationDistance}>
                      {item.distance} km
                    </Text>
                  </View>
                  <View style={styles.CallButton}>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(`tel:${item.phone}`)}>
                      <FontAwesome5
                        style={{transform: [{rotateY: '180deg'}]}}
                        name="phone"
                        size={20}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
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
    // marginBottom: 15,
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
  TitleContainer: {},
  HeadingText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  lowerContainer: {},
  cardContainer: {},
  Card: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  NameAndDistance: {},
  PoliceStationName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  PoliceStationDistance: {
    fontSize: 17,
    color: 'grey',
  },
  CallButton: {
    marginRight: 10,
  },
});
