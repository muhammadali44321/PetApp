import React from 'react';
import {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Splash from '../entry/Splash';
import Stepper from '../entry/Stepper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {PrivateValueStore} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    // GoogleSignin.configure({
    //   webClientId:
    //     '184731284124-9akld05bb715k55627crga68pdrs2gtv.apps.googleusercontent.com',
    // });
    // console.log('ali');
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Step1';
  } else {
    routeName = 'LoginScreen';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Step1"
        component={Stepper}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignupScreen"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
