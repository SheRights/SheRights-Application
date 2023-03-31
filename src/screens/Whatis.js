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

const Whatis = ({route, navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.UpperContainer}>
        {/* <TouchableOpacity onPress={() =>navigation.replace('Awarenesstab')}>
          <View style={styles.backbuttonContainer}>
            <FontAwesome5 color="black" name="angle-left" size={30} />
          </View>
        </TouchableOpacity > */}
        <View style={styles.TitleContainer}>
          <Text style={styles.HeadingText}>Insights always stays!</Text>
        </View>
      </View>

      {/* <ScrollView style={styles.contentContainer}>
        <View style={styles.ImageContainer}>
          <Image style={styles.img} source={route.params.img} />
        </View>
        <View style={{marginBottom: 30, backgroundColor: "red"}}>
        <Text style={styles.que}>{route.params.que}</Text>
        <Text style={styles.ans}>{route.params.ans}</Text>
        </View>
      </ScrollView> */}

      <ScrollView>
      <View style={styles.ContentConatiner}>
        <View style={styles.ImageContainer}>
          <Image style={styles.img} source={route.params.img} />
        </View>
        <View style={styles.QnAContainer}>
          <Text style={styles.que}>{route.params.que}</Text>
          <Text style={styles.ans}>{route.params.ans}</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Whatis;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: "column"
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
  ContentConatiner:{
    height: "100%"
  },
  ImageContainer: {
    height: '53%',
    overflow: "hidden",
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
    height: 300
  },
  contentContainer: {},
  QnAContainer:{
    padding: 10,
    marginBottom: 30
  },
  que: {
    color: '#D5562D',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
  },
  ans: {
    color: 'black',
    marginLeft: 10,
    fontSize: 20,
  },
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import React from 'react';

// const Whatis = ({route, navigation}) => {
//   return (
//     <View style={styles.maincontainer}>
//       <View style={styles.UpperContainer}>
//         <TouchableOpacity>
//           <View style={styles.backbuttonContainer}>
//             <FontAwesome5 color="black" name="angle-left" size={30} />
//           </View>
//         </TouchableOpacity>
//         <View style={styles.TitleContainer}>
//           <Text style={styles.HeadingText}>Your Complaint History</Text>
//         </View>
//       </View>
//       <ScrollView>
//         <View style={{height: "100%", backgroundColor: 'red', flex: 1}}>
//           <Image style={styles.img} source={route.params.img} />

//           <View style={styles.contentContainer}>
//             <Text style={styles.que}>{route.params.que}</Text>
//             <Text style={styles.ans}>{route.params.ans}</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Whatis;

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     backgroundColor: 'black',
//   },

//   UpperContainer: {
//     height: 60,
//     backgroundColor: '#EEE6FF',
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//     alignItems: 'center',
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//     // justifyContent:"space-around"
//   },
//   backbuttonContainer: {
//     // marginBottom: 15,
//     marginLeft: 10,
//   },
//   TitleContainer: {},
//   HeadingText: {
//     textAlign: 'center',
//     fontSize: 20,
//     color: '#000',
//     marginLeft: 20,
//     fontWeight: 'bold',
//   },
//   img: {
//     height: '55%',
//     width: '100%',
//   },
//   contentContainer: {
//     padding: 10,
//     backgroundColor: "yellow"
//   },
//   que: {
//     color: '#D5562D',
//     fontWeight: 'bold',
//     fontSize: 22,
//     marginLeft: 10,
//   },
//   ans: {
//     color: 'black',
//     backgroundColor: "blue",
//     marginLeft: 10,
//     fontSize: 20,
//   },
// });
