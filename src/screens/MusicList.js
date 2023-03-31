import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';


const musicData=[
  {
    id: 1,
    artist: "One Direction",
    name: "One Thing",
    path: "onething",
    duration: "2 min",
    description: "This song is about when sometimes you just like someone really intensely for some unknown reason. It might not be their looks or their personality in particular, but just something about them is completely great and you cant put your finger on it. Something thats unique to that person. All people can relate to that. In an interview with the Examiner.com, co-writer Carl Falk told the story of the song, he said: “That was originally written as two different songs; One had a really, really good verse and the other had a really, really good chorus."
  },
  {
    id: 2,
    artist: "Taylor Swift",
    name: "Bad Blood",
    path: "badblood",
    duration: "3 min",
    description: "This song is about when sometimes you just like someone really intensely for some unknown reason. It might not be their looks or their personality in particular, but just something about them is completely great and you cant put your finger on it. Something thats unique to that person. All people can relate to that. In an interview with the Examiner.com, co-writer Carl Falk told the story of the song, he said: “That was originally written as two different songs; One had a really, really good verse and the other had a really, really good chorus."
  },
  {
    id: 3,
    artist: "Areana Grande",
    name: "Dont call me an angle",
    path: "dcma",
    duration: "2 min",
    description: "This song is about when sometimes you just like someone really intensely for some unknown reason. It might not be their looks or their personality in particular, but just something about them is completely great and you cant put your finger on it. Something thats unique to that person. All people can relate to that. In an interview with the Examiner.com, co-writer Carl Falk told the story of the song, he said: “That was originally written as two different songs; One had a really, really good verse and the other had a really, really good chorus."
  },
  {
    id: 4,
    artist: "One Direction",
    name: "What make you beatuiful",
    path: "wmyb",
    duration: "4 min",
    description: "This song is about when sometimes you just like someone really intensely for some unknown reason. It might not be their looks or their personality in particular, but just something about them is completely great and you cant put your finger on it. Something thats unique to that person. All people can relate to that. In an interview with the Examiner.com, co-writer Carl Falk told the story of the song, he said: “That was originally written as two different songs; One had a really, really good verse and the other had a really, really good chorus."
  },
]

const MusicList = ({navigation}) => {
  const [MusicFiles, setMusicFiles] = useState([]);

  // useEffect(() => {
  //   const getMusic = async () => {
  //     try {
  //       const MusicList = [];
  //       await firestore()
  //         .collection('TherapyData')
  //         .doc('tqNCTGFfczm6srVUjTwn')
  //         .collection('MusicFiles')
  //         .get()
  //         .then(result => {
  //           // console.log(result.size);
  //           result.forEach(doc => {
  //             const {duration, id, location, name} = doc.data();
  //             MusicList.push({
  //               duration,
  //               id,
  //               location,
  //               name,
  //             });
  //           });
  //         });
  //       setMusicFiles(MusicList);
  //       console.log(MusicList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getMusic();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Listen To SheRights</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.lowerContainer}>
          <View style={styles.cardContainer}>
            {musicData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('MusicScreen',{namee: item.name,descriptionn: item.description, path: item.path, artist: item.artist})} key={index}>
                  <View style={styles.Card}>
                    <View style={styles.CallButton}>
                      <FontAwesome5 name="music" color="black" size={25} />
                    </View>
                    <View style={styles.NameAndDistance}>
                      <Text style={styles.PoliceStationName}>{item.name}</Text>
                      <Text style={styles.PoliceStationDistance}>
                        {item.duration}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
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
  lowerContainer: {
    marginTop: 10,
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
    marginLeft: 30,
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
    marginLeft: 12,
  },
});
