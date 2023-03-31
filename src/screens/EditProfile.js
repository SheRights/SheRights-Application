import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TextInput, Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
// import DocumentPicker from 'react-native-document-picker';

const {width, height} = Dimensions.get('window');

const EditProfile = ({route, navigation}) => {
  const [Name, setName] = useState('');
  const [idProof, setIdProof] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const updateProfile = async () => {
    try {
      await firestore()
        .collection('users').doc(route.params.uemail)
        .update({
          name: Name,
          IdProof: idProof,
          phone: phone,
          address: address,
          gender: gender
        })
        .then(() => {
          console.log('User updated!');
          ToastAndroid.show(
            'Data updated successfully!',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );

          navigation.replace('Bottomtab')
        })
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPicture = async () => {};
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.backbuttonContainer}>
            {/* <TouchableOpacity>
              <FontAwesome5 name="angle-left" size={40} />
            </TouchableOpacity> */}
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={() => uploadPicture()}>
            <View style={styles.imageConatiner}>
              <Image
                style={styles.roundImage}
                source={{uri: 'https://picsum.photos/200/300'}}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 15,
              textAlign: 'center',
              color: '#000',
            }}>
            {route.params.uemail}
          </Text>
        </View>

        <View style={styles.formContainer}>
          <ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Name"
                value={Name}
                onChangeText={text => setName(text)}
                // mode="outlined"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Id Proof"
                value={idProof}
                onChangeText={text => setIdProof(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Phone"
                keyboardType="numeric"
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Address"
                value={address}
                onChangeText={text => setAddress(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inoutHeader}>Gender</Text>
              <View style={styles.genderContainer}>
                <TouchableOpacity
                  onPress={() => setGender('male')}
                  style={[
                    styles.boxContainer,
                    {
                      backgroundColor: gender == 'male' ? '#EEE6FF' : '#fff',
                      color: gender == 'male' ? '#000' : '#000',
                    },
                  ]}>
                  <View style={styles.box}>
                    <FontAwesome5
                      name="male"
                      size={18}
                      color={gender == 'male' ? '#000' : '#000'}
                    />
                    <Text style={{color: gender == 'male' ? '#000' : '#000'}}>
                      Male
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.boxContainer,
                    {
                      backgroundColor: gender == 'female' ? '#EEE6FF' : '#fff',
                      color: gender == 'male' ? '#000' : '#000',
                    },
                  ]}
                  onPress={() => setGender('female')}>
                  <View style={styles.box}>
                    <FontAwesome5
                      name="female"
                      size={18}
                      color={gender == 'female' ? '#000' : '#000'}
                    />
                    <Text style={{color: gender == 'female' ? '#000' : '#000'}}>
                      Female
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
            activeOpacity={0.7}
              style={styles.saveBtnContainer}
              onPress={updateProfile}
            >
              <View style={styles.saveBtn}>
                <Text style={styles.saveBtnText}>Update</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 20,
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.35,
    backgroundColor: '#EEE6FF',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,

  },
  backbuttonContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  imageConatiner: {
    marginTop: 30,
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: 'gray',
    borderWidth: 2,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    color: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ddd',
    marginVertical: 15,
  },
  inoutHeader: {
    marginRight: 10,
    color: '#000',
    opacity: 0.6,
  },
  input: {
    flexGrow: 1,
    height: 60,
    // alignSelf: 'stretch',
    // borderBottomWidth: 1,
    fontWeight: 'bold',
    color: '#000',
    // width: width-30,
    backgroundColor: '#fff',
    padding: 0,
  },
  saveBtnContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    width: 150,
    height: 45,
    backgroundColor: '#EEE6FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  saveBtnText: {
    color: '#000',
    fontSize: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    marginTop: 5,
  },
  boxContainer: {
    width: 100,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    // backgroundColor: '#fff',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
