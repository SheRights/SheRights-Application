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
  
  const CyclingScreen = ({navigation}) => {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.UpperContainer}>
        <TouchableOpacity>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity>
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Cycling</Text>
        </View>
      </View>
        <ScrollView>
          <View>
           {/* <Text style={styles.que}>1. Meditation</Text> */}
            <View style={styles.imgsec}>
              <Image
                source={require('../components/cycle.png')}
                style={styles.imghere}
              />
            </View>
  
            <View style={styles.steps}>
              <Text style={styles.ans}>
                <Text style={styles.step}>Why cycling is great for your mental health </Text>
                {'\n'}{'\n'}- Cycling reduces stress
                {'\n'}- It helps with anxiety too
                {'\n'}- Increase your self-esteem
                {'\n'}- Good for fighting depression
                {'\n'}- Helps you socialise
                {'\n'}
                {'\n'}

                <Text style={styles.step}>How often should you ride each week?</Text>
                {'\n'}{'\n'}As a beginner, ride 2–3 times     per week for a total of 2–3 hours
                {'\n'}Beginners need at least 2 rest days during the week 
                {'\n'}
                {'\n'}
                </Text>
                
            <TouchableOpacity
            backgroundColor="#fff"
            style={styles.startbtn} 
            onPress={() => {navigation.navigate('Timer');}}>
                <Text style={{color:"black", fontSize:18,   fontWeight:"bold"}}>Start Now!</Text>
                
            </TouchableOpacity>
                        </View>
  
          </View>
  
       
        </ScrollView>
      </View>
    );
  };
  
  export default CyclingScreen;
  
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
    imghere: {
      height: 250,
      width: '80%',
      alignSelf: 'center',
      marginVertical: 20,
    },
    startbtn:{
        paddingVertical:15,
        backgroundColor:"#fff",
        borderRadius:15,
        alignItems:"center",
      
    }
  });
  