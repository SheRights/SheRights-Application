import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const StationData = [
  {
    id: 1,
    name: 'Hey, previously you do not have any complaint registered!',
   // radius: 'Call',
  },
  // {
  //   id: 2,
  //   name: 'Bhumi Foundation',
  //   radius: 'Message',
  // },
  // {
  //   id: 3,
  //   name: 'Karvenagar Police Station',
  //   radius: 'Call',
  // },
];

const MusicList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        {/* <TouchableOpacity >
        <View style={styles.backbuttonContainer}>
          <FontAwesome5 color="black" name="angle-left" size={30} />
        </View>
        </TouchableOpacity> */}
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>
           Your Complaint History
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.lowerContainer}>
          <View style={styles.cardContainer}>
            {StationData.map((item, index) => {
              return (
                <View >
                
                  <View style={styles.NameAndDistance}>
                    <Text style={styles.PoliceStationName}>{item.name}</Text>
                    <Text style={styles.PoliceStationDistance}>
                      {item.radius}
                    </Text>
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

export default MusicList;

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
      
        alignItems: 'center',
        // justifyContent:"space-around"
    
  },
  backbuttonContainer: {
    // marginBottom: 15,
    marginLeft:10,
  },
  TitleContainer: {},
  HeadingText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginLeft:20,
    fontWeight: 'bold',
  },
  lowerContainer: {
    marginTop: 10
  },
  cardContainer: {},
  Card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
   // justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  NameAndDistance: {
    marginLeft:30,
    marginTop:'70%'
   
  },
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
    marginLeft:12
   
  },
});
