import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useState, useEffect, useRef} from 'react';
import MusicList from './MusicList';
import firestore from '@react-native-firebase/firestore';


const Therapies = ({navigation}) => {
  
  const [therapy, setTherapy] = useState([])

  useEffect(() => {
    const getTherepies = async () => {
      try {
        const therapyList = [];
        await firestore()
          .collection('TherapyData')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {id,image,name,screen} = doc.data();
              therapyList.push({
                id,
                image,
                name,
                screen,
              });
            });
          });
          setTherapy(therapyList);
          console.log(therapyList);
      } catch (error) {
        console.log(error);
      }
    };
  
    getTherepies();
    
  }, []);

  return (
    <View style={styles.maincontainer}>
      <View style={styles.UpperContainer}>
        <TouchableOpacity  onPress={() =>navigation.navigate('Bottomtab')}>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Heal With Therapies</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.therapies}>
          {therapy.map((item,index)=>{
            return(
              <TouchableOpacity
              key={index}
            activeOpacity={1}
            onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.therapyCard}>
              <View styles={styles.ImageConatiner}>
                <Image
                  source={{uri: item.image}}
                  style={styles.imghere}
                />
              </View>

              <View style={styles.therepyNameContainer}>
                <Text style={styles.TherepyText}>{item.name}{'\n'}Therapy</Text>
              </View>
            </View>
          </TouchableOpacity>
            )
          })}
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Therapies;

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
    padding: 10
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
  therapies: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  therapyCard: {
    backgroundColor: '#F5EAF8',
    paddingHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    elevation: 1,
  },
  ImageConatiner: {
    backgroundColor: "red"
  },
  imghere: {
    // backgroundColor: "red",
    height: 150,
    width: 150,
  },
  therepyNameContainer: {
    marginLeft: 20,
    // backgroundColor: "yellow",
    marginTop: 50,
  },
  TherepyText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    // textAlign: 'center',
  },
});
