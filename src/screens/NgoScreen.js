import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';

const Ngo = ({route, navigation}) => {
  const [helpData, setHelpData] = useState([]);
  const [PoliceStation, setPoliceStation] = useState([]);
  const [HelpType, setHelpType] = useState(route.params.titlename);
  const messagebody = 'Emergency 🆘🆘🆘 Please help!!';
  const separator = Platform.OS === 'ios' ? '&' : '?';
  useEffect(() => {
    const getTherepies = async () => {
      try {
        const helpDataList = [];
        await firestore()
          .collection('HelpSection')
          .doc('xaFS7tqYYC8ZYztaowPT')
          .collection('NGOData')
          .orderBy('distance')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {address, distance, id, name, phone} = doc.data();
              helpDataList.push({
                address,
                distance,
                id,
                name,
                phone,
              });
            });
          });
        setHelpData(helpDataList);
        console.log(helpDataList);
      } catch (error) {
        console.log(error);
      }
    };

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

    getTherepies();
    getPoliceStation();
  }, []);

  return (
    <View style={styles.maincontain}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity onPress={() =>navigation.navigate('Bottomtab')}>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>
            Nearby {route.params.titlename}'s to contact
          </Text>
        </View>
      </View>

      <View style={styles.HelpCards}>
        {route.params.titlename === 'Police Station'
          ? PoliceStation.map((item, index) => {
              return (
                <View style={styles.ngocard} key={index}>
                  <View style={styles.ngoname}>
                    <Text style={styles.nametxt}>{item.name}</Text>
                    <Text style={styles.dist}>{item.distance} KM</Text>
                  </View>
                  <View style={styles.contact}>
                    <TouchableOpacity
                      style={styles.callbtn}
                      onPress={() => Linking.openURL(`tel:${item.phone}`)}>
                      <Text style={{fontSize: 20, color: 'black'}}>Call</Text>
                      <FontAwesome5
                        name="phone"
                        size={20}
                        color="black"
                        style={styles.phoneicon}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.msgbtn}
                      onPress={() =>
                        Linking.openURL(
                          `sms:${item.phone}${separator}body=${messagebody}`,
                        )
                      }>
                      <Text style={{fontSize: 20, color: 'black'}}>
                        Message
                      </Text>
                      <FontAwesome5
                        name="comments"
                        size={20}
                        color="black"
                        style={styles.msgicon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          : helpData.map((item, index) => {
              return (
                <View style={styles.ngocard} key={index}>
                  <View style={styles.ngoname}>
                    <Text style={styles.nametxt}>{item.name}</Text>
                    <Text style={styles.dist}>{item.distance} KM</Text>
                  </View>
                  <View style={styles.contact}>
                    <TouchableOpacity
                      style={styles.callbtn}
                      onPress={() => Linking.openURL(`tel:${item.phone}`)}>
                      <Text style={{fontSize: 20, color: 'black'}}>Call</Text>
                      <FontAwesome5
                        name="phone"
                        size={20}
                        color="black"
                        style={styles.phoneicon}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.msgbtn}
                      onPress={() =>
                        Linking.openURL(
                          `sms:${item.phone}${separator}body=${messagebody}`,
                        )
                      }>
                      <Text style={{fontSize: 20, color: 'black'}}>
                        Message
                      </Text>
                      <FontAwesome5
                        name="comments"
                        size={20}
                        color="black"
                        style={styles.msgicon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
      </View>
    </View>
  );
};

export default Ngo;

const styles = StyleSheet.create({
  maincontain: {
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
  phoneicon: {
    transform: [{rotateY: '180deg'}],
  },
  callbtn: {
    backgroundColor: '#fff',
    width: '42%',
    marginTop: 6,
    padding: 8,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  msgbtn: {
    backgroundColor: '#fff',
    width: '42%',
    marginTop: 6,

    padding: 8,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
  },

  HelpCards: {
    marginTop: 20,
  },
  ngocard: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    height: 150,
    marginBottom: 20,
    backgroundColor: '#F3E3F2',
  },
  ngoname: {
    marginTop: 15,
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    height: 70,
    borderRadius: 10,
  },
  nametxt: {
    fontSize: 20,
    color: 'black',
    marginLeft: 15,
    marginTop: 7,
    marginBottom: 10,
  },
  dist: {
    color: '#ADAD85',
    marginLeft: 15,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent:"space-between"
  },
});
