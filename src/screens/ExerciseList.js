import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';

const {width, height} = Dimensions.get('window');

const ExerciseList = ({navigation}) => {

  const [ExerciseType, setExerciseType] = useState([])

  useEffect(() => {
    const getExeType = async () => {
      try {
        const ExerciseList = [];
        await firestore()
          .collection('TherapyData').doc('AE271BA7rodO5lPMWB9i').collection('ExerciseData')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {id,image,name,screen} = doc.data();
              ExerciseList.push({
                id,
                image,
                name,
                screen
              });
            });
          });
          setExerciseType(ExerciseList);
          console.log(ExerciseList);
      } catch (error) {
        console.log(error);
      }
    };
  
    getExeType();
    
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
          <Text style={styles.HeadingText}>Here are few excercies!</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.CategoryContainer}>
          <View style={styles.categorytitleContainer}>
            <View style={styles.TitleBtn}>
              <View>
                <Text style={styles.categorytitleText}>
                  You can try out few of these exercises
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.Categorycards}>
            {ExerciseType.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  onPress={() => navigation.navigate(item.screen)}>
                  <View style={styles.card}>
                    <View style={styles.imageContainer}>
                      <Image source={{uri: item.image}} style={styles.CategoryImage} />
                    </View>
                    <View style={styles.TextContainer}>
                      <Text style={styles.categoryText}>{item.name}</Text>
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

export default ExerciseList;

const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
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

  CategoryContainer: {
    paddingHorizontal: 20,
  },
  categorytitleContainer: {
    marginBottom: 10,
  },
  categoryButton: {
    // width: '100%',
  },
  categorytitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
    fontFamily: 'Cochin',
  },
  Categorycards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // elevation: 2
  },
  card: {
    width: (width - 60) / 2,
    marginBottom: 15,
    height: 160,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F5EAF8',
    overflow: 'hidden',
    elevation: 1,
  },
  imageContainer: {},
  CategoryImage: {
    width: 120,
    height: 110,
    borderRadius: 5,
  },
  TextContainer: {
    marginTop: 5,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
