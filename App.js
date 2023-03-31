import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from './src/screens/SplashScreen';
import Testing from './src/screens/Testing';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DQue1 from './src/screens/DQue1';
import HomeScreen from './src/screens/HomeScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import EditProfile from './src/screens/EditProfile';
import Whatis from './src/screens/Whatis';
import NgoScreen from './src/screens/NgoScreen';
import ComChat from './src/screens/ComChat';
import Therapies from './src/screens/Therapies';
import MusicList from './src/screens/MusicList';
import ExerciseList from './src/screens/ExerciseList';
import Yoga from './src/screens/Yoga';
import CyclingScreen from './src/screens/CyclingScreen';
import Timer from './src/screens/Timer';
import DefenceTherapy from './src/screens/DefenceTherapy';
import Awareness from './src/screens/Awareness';
import Walking from './src/screens/Walking';
import Breathing from './src/screens/Breathing';
import Aerobics from './src/screens/Aerobics';
import Stretching from './src/screens/Stretching';
import AudioBooks from './src/screens/AudioBooks';
import SeverityScreen from './src/screens/SeverityScreen';
import ComplaintHistory from './src/screens/ComplaintHistory'
import Ipc from './src/screens/Ipc'
import MusicScreen from './src/screens/MusicScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#5D5FEF',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 6,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="home" size={22} color={color} />;
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="book-open" size={22} color={color} />;
          },
        }}
        name="Awarenesstab"
        component={Awareness}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="comments" size={22} color={color} />;
          },
        }}
        name="ComChat"
        component={ComChat}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="user" size={22} color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Bottomtab"
          component={TabNavigation}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EmergencyScreen"
          component={EmergencyScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DQ1"
          component={DQue1}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Whatis"
          component={Whatis}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="ComChat"
          component={ComChat}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="NgoScreen"
          component={NgoScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Therapies"
          component={Therapies}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="MusicList"
          component={MusicList}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="ExerciseList"
          component={ExerciseList}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Yoga"
          component={Yoga}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="CyclingScreen"
          component={CyclingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Timer"
          component={Timer}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DefenceTherapy"
          component={DefenceTherapy}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Awareness"
          component={Awareness}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Walking"
          component={Walking}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Breathing"
          component={Breathing}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Aerobics"
          component={Aerobics}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Stretching"
          component={Stretching}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AudioBooks"
          component={AudioBooks}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SeverityScreen"
          component={SeverityScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="ComplaintHistory"
          component={ComplaintHistory}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Ipc"
          component={Ipc}
        />

<Stack.Screen
          options={{headerShown: false}}
          name="MusicScreen"
          component={MusicScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
