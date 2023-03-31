import React, {useState, useEffect, useRef} from 'react';
import VideoPlayer from 'react-native-video-player';
import video from '../components/self.mp4';
import firestore from '@react-native-firebase/firestore';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const DefenceTherapy = () => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getDefVideos = async () => {
      try {
        const defVideoList = [];
        await firestore()
          .collection('TherapyData').doc('FwogJGG8KwF4Mhl5V4YW').collection('VideoData')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {id,title,video} = doc.data();
              defVideoList.push({
                id,
                title,
                video
              });
            });
          });
          setVideos(defVideoList);
          console.log(defVideoList);
      } catch (error) {
        console.log(error);
      }
    };
  
    getDefVideos();
    
  }, []);

  return (
    <View style={styles.maincontainer}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Defend yourself strongly</Text>
        </View>
      </View>
      <ScrollView>
        {videos.map((item, index) => {
          return (
            <View style={styles.videocard} key={index}>
              <Text style={styles.que}>{item.title}</Text>

              <View style={styles.imgsec}>
                <VideoPlayer
                  video={{uri: item.video}} // the video file
                  autoPlay={true}
                  defaultMuted={true}
                  style={styles.videohere}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DefenceTherapy;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    margin: 0,
  },
  steps: {
    backgroundColor: '#e6e6ff',
    elevation: 10,
    padding: 20,
    margin: 15,
    borderRadius: 20,
  },

  que: {
    color: '#D5562D',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
    marginVertical: 10,
  },
  ans: {
    color: 'black',

    marginLeft: 10,
    fontSize: 20,
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
  step: {
    fontWeight: 'bold',
    color: '#00134d',
  },
  backgroundVideo: {
    height: 200,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 15,
  },
  imgsec: {
    width: '100%',
    //padding:15,

    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  videohere: {
    width: '100%',
    borderRadius: 20,
  },
  videocard: {
    marginBottom: 15,
    padding: 8,
  },
});
