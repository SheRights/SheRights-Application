import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Lottie from 'lottie-react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SoundPlayer from 'react-native-sound-player'

const MusicScreen = ({route,navigation}) => {
    useEffect(() => {
        const playSong = () => {
            try {
              SoundPlayer.playSoundFile(route.params.path, 'mp3')
            } catch (e) {
              alert('Cannot play the file')
              console.log('cannot play the song file', e)
            }
          }
        
          const getInfo = async() => { // You need the keyword `async`
            try {
              const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
              console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
            } catch (e) {
              console.log('There is no song playing', e)
            }
          }


          playSong();
          getInfo();
    }, [])

    const StopSong = () => {
        SoundPlayer.stop();
    }
    
  return (
    <View style={styles.parentcontainer}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Good music always helps!</Text>
        </View>
      </View>

      <View style={styles.ContentContainer}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}>
          <Lottie
            source={require('../components/music.json')}
            autoPlay
            loop
            style={styles.illu}
          />
        </View>

        <View style={styles.SongInfo}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40, textAlign: 'center'}}>
            {route.params.namee}
          </Text>
          <Text style={{color: 'black', fontSize: 15, opacity: 0.7}}>
            -{route.params.artist}
          </Text>

          <Text
            style={{color: 'black', fontSize: 15, opacity: 0.7, marginTop: 20}}>
            {route.params.descriptionn}
          </Text>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.StopSong} onPress={()=>{StopSong(),navigation.navigate('MusicList')}}>
          <Text style={styles.StopSongText}>Listen To More Songs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  parentcontainer: {
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
  ContentContainer: {
    width: '100%',
  },

  illu: {
    height: 100,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SongInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
  lowerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
  },
  StopSong: {
    backgroundColor: '#EEE6FF',
    marginTop: 40,
    padding: 10,
    height: 50,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 10
  },
  StopSongText: {
    color: 'black',
    fontWeight: 'bold'
  },
});
