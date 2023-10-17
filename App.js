import React from "react";
import { View,Text,StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from './src/Homescreen';
import Listing from './src/Listing';
import Login from "./src/Login";
import Signup from "./src/Signup";
import Petscreen from "./src/screens/Petscreen";
import Acessoryscreen from "./src/screens/Acessoryscreen";
import Foodscreen from "./src/screens/Foodscreen";
import Expertscreen from "./src/screens/Expertscreen";
import Notification from "./src/Notification";
import Account from "./src/Account";
import Expertdetail from "./src/homecomponents/Expertdetail";
import Petsdetail from "./src/homecomponents/Petsdetail";
import ProductListForm from "./src/homecomponents/ProductListForm";




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Homescreen} />
      <Tab.Screen  options={{headerShown: false}} name="Listing" component={Listing} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen options={{headerShown: false}} name="Account" component={Account} />
    </Tab.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator>
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



function App() {
  return(
    <NavigationContainer>
      <AuthNavigator />

    </NavigationContainer>

  )
}



export default App;
