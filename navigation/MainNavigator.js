import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../Homescreen"
import Listing from '../Listing';
import Login from "../Login";
import Signup from "../Signup";
import Petscreen from "../screens/Petscreen";
import Acessoryscreen from "../screens/Acessoryscreen";
import Foodscreen from "../screens/Foodscreen";
import Expertscreen from "../screens/Expertscreen";
import Notification from "../Notification";
import Account from "../Account";
import Expertdetail from "../homecomponents/Expertdetail";
import Petsdetail from "../homecomponents/Petsdetail";
import ProductListForm from "../homecomponents/ProductListForm";
import Splash from "../entry/Splash";
import Stepper from "../entry/Stepper";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Homescreen} />
      <Tab.Screen options={{headerShown: false}} name="Listing" component={Listing} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen options={{headerShown: false}} name="Account" component={Account} />
    </Tab.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash}/>
      <Stack.Screen options={{headerShown: false}} name="Step1" component={Stepper}/>
      <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen options={{headerShown: false}} name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
        <Stack.Screen options={{headerShown: false}} name="petscreen" component={Petscreen} />
        <Stack.Screen options={{headerShown: false}} name="accessoryscreen" component={Acessoryscreen} />
        <Stack.Screen options={{headerShown: false}} name="expertscreen" component={Expertscreen}/>
        <Stack.Screen options={{headerShown: false}} name="foodscreen" component={Foodscreen} />
        <Stack.Screen name="expertdetail" component={Expertdetail} />
        <Stack.Screen options={{headerShown: false}} name="petsdetail" component={Petsdetail} />
        <Stack.Screen name="Listingform" component={ProductListForm} />
        <Stack.Screen options={{headerShown: false}} name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}