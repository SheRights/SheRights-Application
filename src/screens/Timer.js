import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TImer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <View style={styles.backbuttonContainer}>
          <FontAwesome5 name="angle-left" size={40} color="black" />
        </View>

        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Let's Ride Together!</Text>
        </View>
      </View>
      <Text style={styles.head}>
        Start the timer, and dive in 10 mins of healthly ride!
      </Text>
      <View style={styles.amchicycle}>
        <Image style={styles.cycle} source={require('../components/bi.png')} />
        <View style={styles.timercont}>
          <CountdownCircleTimer
            size={110}
            strokeWidth={7}
            style={styles.clock}
            isPlaying={isPlaying}
            duration={600}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            onComplete={() => ({shouldRepeat: true, delay: 2})}
            updateInterval={1}>
            {({remainingTime, color}) => (
              <Text style={{color, fontSize: 12, textAlign: 'center'}}>
                {remainingTime}
                {'\n'}Seconds
              </Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setIsPlaying(prev => !prev)}
        style={styles.btn}>
        <Text style={styles.btntxt}>ON/OFF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TImer;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // paddingTop: statusBarHeight,
    backgroundColor: '#FFF2F2',
  },
  btn: {
    backgroundColor: '#fff',
    marginTop: 5,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btntxt: {
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
  },
  cycle: {
    width: 350,
    height: 350,
  },
  clock: {},
  timercont: {
    position: 'absolute',
    right: 0,
    marginTop: 140,
    marginRight: 25,
  },
  amchicycle: {
    marginTop: '10%',
  },
  UpperContainer: {
    backgroundColor: '#EEE6FF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    height: '12%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
  },
  backbuttonContainer: {
    // marginBottom: 15,
  },
  TitleContainer: {},
  HeadingText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  head:{
    color:"#002266",
    fontSize:18,
    textAlign:"center",
    fontWeight:"bold",
    marginTop:30
  }
});
