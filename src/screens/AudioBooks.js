import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import Lottie from 'lottie-react-native';


const AudioBook = () => {

  const [AudioBookfiles, setAudioBookfiles] = useState([])

  useEffect(() => {
    const getAudioBook = async () => {
      try {
        const AudioBookList = [];
        await firestore()
          .collection('TherapyData').doc('iYgKnmAhIdvJQg9UFn16').collection('AudioBooksFiles')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {duration,id,location,name} = doc.data();
              AudioBookList.push({
                duration,
                id,
                location,
                name
              });
            });
          });
          setAudioBookfiles(AudioBookList);
          console.log(AudioBookList);
      } catch (error) {
        console.log(error);
      }
    };
  
    getAudioBook();
    
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        {/* <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity> */}
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Find a good book here</Text>
        </View>
      </View>
<View style={styles.lowerContainer}>
<Lottie
            source={require('../components/construction.json')}
            autoPlay
            loop
            style={styles.illu}
          />
</View>
      {/* <ScrollView>
        <View style={styles.lowerContainer}>
          <View style={styles.cardContainer}>
            {AudioBookfiles.map((item, index) => {
              return (
                <View style={styles.Card} key={index}>
                    <View style={styles.CallButton}>
                    <TouchableOpacity>
                        <FontAwesome5 name="headphones-alt" color="black" size={25} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.NameAndDistance}>
                    <Text style={styles.PoliceStationName}>{item.name}</Text>
                    <Text style={styles.PoliceStationDistance}>
                      {item.duration}
                    </Text>
                  </View>
                  
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView> */}
    </View>
  );
};

export default AudioBook;

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
  TitleContainer: {},
  HeadingText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginLeft:20,
    fontWeight: 'bold',
  },
  lowerContainer: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: "80%"
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
    marginLeft:30
   
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
    //marginRight: 10,
    marginLeft:12
   
  },
  illu: {
    height: 300,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
