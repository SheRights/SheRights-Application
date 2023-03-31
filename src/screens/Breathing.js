import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Breathing = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>
            Let's breathe in some fresh air
          </Text>
        </View>
      </View>
      <Text style={styles.head}>
        "Just breathe. You are strong enough to handle your challenges, wise
        enough to find a solution to your problems, and capable enough to do
        whatever needs to be done."
      </Text>
      <View style={styles.amchicycle}>
        <View style={styles.timercont}>
          <CountdownCircleTimer
            size={190}
            strokeWidth={7}
            style={styles.clock}
            isPlaying={isPlaying}
            duration={120}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            onComplete={() => ({shouldRepeat: true, delay: 2})}
            updateInterval={1}>
            {({remainingTime}) => (
              //     <Text style={{color: "black", backgroundColor:"red", fontSize: 12, textAlign: 'center'}}>
              //     {remainingTime}
              //     {'\n'}Seconds
              //   </Text>

              //   &&

              <Lottie
                source={require('../components/breath.json')}
                autoPlay
                loop
                style={styles.illu}
              />
            )}
          </CountdownCircleTimer>
        </View>
      </View>
      <Text style={styles.head}>
        Start a timer, and start breathig for next 2 mins!
      </Text>
      <TouchableOpacity
        onPress={() => setIsPlaying(prev => !prev)}
        style={styles.btn}>
        <Text style={styles.btntxt}>ON/OFF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Breathing;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // paddingTop: statusBarHeight,
    backgroundColor: '#FFF2F2',
  },
  btn: {
    backgroundColor: '#fff',
    marginTop: '5%',
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

  clock: {},
  timercont: {
    alignItems: 'center',
    marginTop: '20%',
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
    padding: 10,
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
  head: {
    color: '#002266',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 30,
    padding: 15,
  },
  illu: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
});
