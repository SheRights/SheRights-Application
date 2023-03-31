import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import React from 'react';

const Yoga = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Yoga</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.que}>1. Meditation</Text>
          <View style={styles.imgsec}>
            <Image
              source={require('../components/medd.png')}
              style={styles.imghere}
            />
          </View>

          <View style={styles.steps}>
            <Text style={styles.ans}>
              <Text style={styles.step}>Step 1: Create Time and Space </Text>
              {'\n'}Choose a regular time each day for mindfulness meditation
              practice, ideally a quiet free from distraction.
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 2: Set a timer</Text>
              {'\n'}Start with just 5 minutes and ease your way up to 15-40
              minutes. {'\n'} {'\n'}
              <Text style={styles.step}>
                Step 3: Find a comfortable sitting position{' '}
              </Text>
              {'\n'}Sit cross-legged on the floor, on the grass or in a chair
              your feet flat on the ground.{'\n'} {'\n'}
              <Text style={styles.step}>Step 4: Check your posture</Text>
              {'\n'}Sit up straight, hands in a comfortable position. Keep neck
              long, chin tilted slightly downward, tongue resting on the roof of
              the mouth. Relax shoulders. Close eyes or gaze downward 5-10 feet
              in front of you.
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.que}>2. Pranayam</Text>
          <View style={styles.imgsec}>
            <Image
              source={require('../components/pran.png')}
              style={styles.imghere}
            />
          </View>

          <View style={styles.steps}>
            <Text style={styles.ans}>
              <Text style={styles.step}>Step 1:</Text>
              {'\n'}Close the right nostril. Exhale through the left and inhale
              to a count of 4.
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 2:</Text>
              {'\n'}Close the left nostril as well and retain the breath to a
              count of 16{'\n'} {'\n'}
              <Text style={styles.step}>Step 3:</Text>
              {'\n'}Release the right nostril and exhale fully through it to a
              count of 8{'\n'} {'\n'}
              <Text style={styles.step}>Step 4:</Text>
              {'\n'}Keeping the left nostril closed, inhale throught the right
              to a count of 4{'\n'}
              {'\n'}
              <Text style={styles.step}>Step 5:</Text>
              {'\n'}Close both nostrils and retain the breath to a count of 16
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 6:</Text>
              {'\n'}Release the left nostril and exhale to a count of 8 to
              complete one round
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.que}>3. Utkatasana</Text>
          <View style={styles.imgsec}>
            <Image
              source={require('../components/utka.png')}
              style={styles.imghere}
            />
          </View>

          <View style={styles.steps}>
            <Text style={styles.ans}>
              <Text style={styles.step}>Step 1:</Text>
              {'\n'}Stand erect with your feet slightly apart
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 2:</Text>
              {'\n'}Stretch your hands to the front with palms facing downwards.
              Do not bend your elbows.{'\n'} {'\n'}
              <Text style={styles.step}>Step 3:</Text>
              {'\n'}Bend the knees and gently push your pelvis down as if you
              are sitting in an imaginary chair.
              {'\n'} {'\n'}
              <Text style={styles.step}>Step 4:</Text>
              {'\n'}Be comfortable or at least try to be! To get a better feel
              of the Chair Pose, imagine reading a newspaper or typing on a
              laptop as you remain seated.
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 5:</Text>
              {'\n'}Ensure that you keep your hands parallel to the ground.
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 6:</Text>
              {'\n'}With awareness, sit straight and lengthen your spine. Relax.
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 7:</Text>
              {'\n'}Keep breathing and flip through the pages of the newspaper,
              enjoying national and international news.
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 8:</Text>
              {'\n'}Sink deeper into the chair by gradually going down but
              ensure that your knees don’t go beyond your toes.
              {'\n'}
              {'\n'}
              <Text style={styles.step}>Step 9:</Text>
              {'\n'}Keep going down slowly and then sit down in Sukhasana
              (cross-legged posture). If you want, you may lie down on your back
              and relax.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Yoga;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    margin: 0,
  },
  steps: {
    backgroundColor: '#e6e6ff',
    elevation:10,
    padding: 20,
    margin: 15,
    borderRadius: 20,
  },

  que: {
    color: '#D5562D',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    marginTop: 15,
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
    alignItems: 'center',
    padding: 10

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
  imghere: {
    height: 250,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
