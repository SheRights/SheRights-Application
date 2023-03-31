import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [IdProof, setIdProof] = useState('');

  const signupfun = async () => {
    if (
      name === '' &&
      phone === '' &&
      age === '' &&
      gender === '' &&
      email === '' &&
      IdProof === '' &&
      pass === ''
    ) {
      ToastAndroid.show(
        'Enter the required fields',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      await auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          firestore()
            .collection('users').doc(email)
            .set({
              name: name,
              phone: phone,
              age: age,
              gender: gender,
              email: email,
              IdProof: IdProof,
              pass: pass,
            })
            .then(() => {
              console.log('User added successfully!');
            });
          ToastAndroid.show(
            'Registered Successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          navigation.replace('Login');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            // console.log('That email address is already in use!');
            ToastAndroid.show(ToastAndroid.SHORT, ToastAndroid.CENTER);
          }

          if (error.code === 'auth/invalid-email') {
            // console.log('That email address is invalid!');
            ToastAndroid.show(
              'The email address is invalid!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
          if (error.code === 'auth/weak-password') {
            'That email address is already in use!',
              // console.log('Password should be more than 6 digits!');
              ToastAndroid.show(
                'Password should be more than 6 digits!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
          }

          console.error(error);
        });
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.UpperContainer}>
        <View style={styles.LabelConatiner}>
          <Text style={styles.LabelText}>
            "Empowering women is not just the right thing to do - it's the smart
            thing to do."
          </Text>
        </View>
      </View>

      <View style={styles.MiddleContainer}>
        <View style={styles.RegTitleContainer}>
          <Text style={styles.RegTitleText}>REGISTRATION</Text>
        </View>
        <View style={styles.InputFieldsConatiner}>
          <TextInput
            style={styles.TextInputArea}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Full Name"
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />
          <TextInput
            style={styles.TextInputArea}
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholder="Phone"
            keyboardType="numeric"
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />
          <TextInput
            style={styles.TextInputArea}
            value={age}
            onChangeText={text => setAge(text)}
            placeholder="Age"
            keyboardType="numeric"
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />

          {/* <TextInput
            style={styles.TextInputArea}
            value={gender}
            onChangeText={text => setGender(text)}
            placeholder="Gender"
          />  */}
          <TextInput
            style={styles.TextInputArea}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email ID"
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />
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
          <TextInput
            style={styles.TextInputArea}
            value={IdProof}
            onChangeText={text => setIdProof(text)}
            placeholder="Aadhaar Card Number"
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />
          <TextInput
            style={styles.TextInputArea}
            value={pass}
            onChangeText={text => setPass(text)}
            placeholder="Enter Password"
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />
        </View>

        <View style={styles.RegisterButtonConatiner}>
          {/* <TouchableOpacity
            onPress={() => signupfun()}
            style={styles.RegButton}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity> */}


          <Button style={styles.Regbtn}
          onPress={() => signupfun()}
          title="REGISTER"
          color="#0038FF"
          
        />
        </View>
      </View>

      <View style={styles.LowerContainerContent}>
        <View style={styles.AskLoginContainer}>
          <Text style={styles.txt}>
            Already have an account?{' '}</Text>
          
          <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
     <Text style={{color:'blue'}}>  Login    </Text>
            </TouchableOpacity>
        
          {/* <TouchableOpacity style={styles.custombtn}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Signup with Google
            </Text>
          </TouchableOpacity> */}
          {/* <Button 
                style={styles.gbtn}
                    onPress={() => {console.log("Google Pressed!")}}
                    title="Sign Up with Google"
                    color="pink"
                
                /> */}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  TextInputArea: {
    height: 40,
    width: '90%',
    alignItems: 'center',
    margin: 10,
    color: '#000',
    // borderWidth: 1,

    padding: 10,
    borderRadius: 10,
  },
  LabelText: {
    color: '#000',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 40,
    margin: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FBF6F6',
  },
  UpperContainer: {
    width: '100%',
    height: '40%',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: '#EEE6FF',
    position: 'absolute',
  },
  LabelConatiner: {},
  MiddleContainer: {
    // flex:0.4,
    backgroundColor: '#fff',
    marginVertical: '30%',
    marginHorizontal: '10%',
    borderRadius: 21,
    padding: 10,
  },
  Regbtn: {
    borderRadius: 21,
    height: 40,
    width: '90%',
  },
  RegTitleContainer: {},
  RegTitleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    color: 'black',
  },
  InputFieldsConatiner: {},
  RegisterButtonConatiner: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegButton: {
    backgroundColor: '#EEE6FF',
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  LowerContainerContent: {
    
  },
  AskLoginContainer: {
    // marginBottom:40,
    marginTop: -80,
    alignItems: 'center',
    paddingBottom: 20,
    //backgroundColor:"#000"
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  boxContainer: {
    width: 100,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  custombtn: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
    color: '#000',
    width: '40%',
    borderRadius: 5,
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  login: {
    color: 'blue',

  },
  gbtn: {
    marginTop: 20,
    paddingTop: 30,

    width: '30%',
    position: 'absolute',
  },
});
