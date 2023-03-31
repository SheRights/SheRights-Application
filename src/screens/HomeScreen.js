import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-paper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Therapies from './Therapies';
import firestore from '@react-native-firebase/firestore';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState();
  const [cats, setCats] = useState([]);
  const [carou, setCarou] = useState([]);
  const [help, setHelp] = useState([]);
  const _carousel = useRef();

  useEffect(() => {
    const getCat = async () => {
      try {
        const catList = [];
        await firestore()
          .collection('categories')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {id, image, name} = doc.data();
              catList.push({
                id,
                image,
                name,
              });
            });
          });
        setCats(catList);
        console.log(catList);
      } catch (error) {
        console.log(error);
      }
    };
    const getCarousel = async () => {
      try {
        const carList = [];
        await firestore()
          .collection('Carousel')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {id, image} = doc.data();
              carList.push({
                id,
                image,
              });
            });
          });
        setCarou(carList);
        console.log(carList);
      } catch (error) {
        console.log(error);
      }
    };
    const getHelpSection = async () => {
      try {
        const HelpSec = [];
        await firestore()
          .collection('HelpSection')
          .get()
          .then(result => {
            // console.log(result.size);
            result.forEach(doc => {
              const {id, image, name, screen} = doc.data();
              HelpSec.push({
                id,
                image,
                name,
                screen,
              });
            });
          });
        setHelp(HelpSec);
        console.log(HelpSec);
      } catch (error) {
        console.log(error);
      }
    };

    getCarousel();
    getCat();
    getHelpSection();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.upperContainer}>
          <View style={styles.HeadingContainer}>
            <Text style={styles.HeadingText}>Hey, how you doin'</Text>
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              ref={_carousel}
              autoplay={true}
              loop={true}
              autoplayDelay={4000}
              data={carou}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.corosal} key={index}>
                    <Image
                      style={styles.imageCorosal}
                      source={{uri: item.image}}
                    />
                  </View>
                );
              }}
              sliderWidth={width * 0.9}
              itemWidth={width * 0.9}
            />
          </View>
        </View>
        <View style={styles.CategoryContainer}>
          <View style={styles.categorytitleContainer}>
            <View style={styles.TitleBtn}>
              <View>
                <Text style={styles.categorytitleText}>Categoires</Text>
              </View>
            </View>
          </View>
          <View style={styles.Categorycards}>
            {cats.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.9}
                  onPress={() =>
                    navigation.navigate('DQ1', {
                      cat: item.name,
                      img: item.image,
                      catId: item.id,
                    })
                  }>
                  <View style={styles.card}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.CategoryImage}
                      />
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

        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#000',
              fontFamily: 'Cochin',
              paddingHorizontal: 20,
              marginBottom: 20,
              marginTop: 5
            }}>
            Therepy Section
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('Therapies')}>
            <View style={styles.therapysection}>
              <View style={styles.therapycard}>
                <Image
                  style={styles.therapyimg}
                  source={require('../components/therapy.png')}
                />
                <Text style={styles.therapytxt}>
                  Get a {'\n'}Therapy {'\n'}Here
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.GetHelpSection}>
          <View>
            <Text style={styles.categorytitleText}>Get Help Here!!</Text>
          </View>
          <View style={styles.Scards}>
            {help.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  onPress={() =>
                    navigation.navigate(item.screen, {titlename: item.name})
                  }>
                  <View style={styles.Featuredcard}>
                    <View style={styles.FeaturedimageContainer}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.FeaturedImage}
                      />
                    </View>
                    <View style={styles.FeaturedTextContainer}>
                      <Text style={styles.featureText}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('EmergencyScreen')}
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 100,
          right: 30,
          height: 70,
          backgroundColor: '#FF4433',
          borderRadius: 100,
        }}>
        <FontAwesome5
          name="phone"
          style={{transform: [{rotateY: '180deg'}], elevation: 2}}
          size={28}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF2F2',
  },
  upperContainer: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#F5EAF8',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  HeadingContainer: {},
  HeadingText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginTop: 20,
    backgroundColor: '#F5EAF8',
  },

  corosal: {
    marginRight: 20,
    width: width,
    height: height / 5,
    borderRadius: 20,
    backgroundColor: '#F5EAF8',
    display: 'flex',
    marginBottom: 10,
  },
  imageCorosal: {
    width: width - 40,
    height: height / 5,
    borderRadius: 10,
  },
  CategoryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  categorytitleContainer: {
    marginBottom: 10,
  },
  categoryButton: {
    // width: '100%',
  },
  categorytitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
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
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#F5EAF8',
    overflow: 'hidden',
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
  therapysection: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  therapycard: {
    backgroundColor: '#F5EAF8',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    //justifyContent:"space-between",
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 4,
  },
  therapyimg: {
    width: 180,

    height: 150,
  },
  therapytxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    // justifyContent:"center",
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 20,
  },
  GetHelpSection: {
    paddingHorizontal: 20,
  },
  Featuredcard: {
    height: 150,
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    backgroundColor: '#F5EAF8',
    borderRadius: 10,
    elevation: 2,
  },
  FeaturedimageContainer: {},
  FeaturedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  FeaturedTextContainer: {
    marginTop: 10,
  },
  featureText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  Scards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 40,
  },
});
