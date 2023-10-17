import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../Homescreen';
import Listing from '../Listing';
import Login from '../Login';
import Signup from '../Signup';
import Petscreen from '../screens/Petscreen';
import Acessoryscreen from '../screens/Acessoryscreen';
import Foodscreen from '../screens/Foodscreen';
import Expertscreen from '../screens/Expertscreen';
import Notification from '../Notification';
import Account from '../Account';
import Expertdetail from '../homecomponents/Expertdetail';
import Petsdetail from '../homecomponents/Petsdetail';
import ProductListForm from '../homecomponents/ProductListForm';
import FoodListForm from '../screens/FoodListForm';
import ProductDetail from '../homecomponents/ProductDetail';
import Splash from '../entry/Splash';
import Stepper from '../entry/Stepper';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import PetListForm from '../screens/PetListForm';
import AccessoryListForm from '../screens/AccessoryListForm';
import PostScreen from '../screens/PostScreen';
import Sample from '../screens/Sample';
import ServiceListForm from '../screens/ServiceListForm';
import EditProfileScreen from '../screens/EditProfileScreen';
import UserPetList from '../screens/UserPetList';
import UserAccessoryList from '../screens/UserAccessoryList';
import Email from '../screens/Email';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Listing') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can customize the icon's appearance here, such as size and color
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B1E523',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{display: 'flex'}, null],
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={Homescreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Listing"
        component={Listing}
      />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash}/>
      <Stack.Screen options={{headerShown: false}} name="Step1" component={Stepper}/>
      <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen options={{headerShown: false}} name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} /> */}
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="MyDrawer"
        component={MyDrawer}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="MyTabs"
        component={MyTabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="petscreen"
        component={Petscreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="accessoryscreen"
        component={Acessoryscreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="expertscreen"
        component={Expertscreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="foodscreen"
        component={Foodscreen}
      />
      <Stack.Screen name="expertdetail" component={Expertdetail} />
      <Stack.Screen
        options={{headerShown: false}}
        name="petsdetail"
        component={Petsdetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetail"
        component={ProductDetail}
      />
      <Stack.Screen name="Listingform" component={ProductListForm} />
      <Stack.Screen
        name="Postscreen"
        component={PostScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FoodListForm"
        component={FoodListForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PetListForm"
        component={PetListForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccessoryListForm"
        component={AccessoryListForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sample"
        component={Sample}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ServiceListForm"
        component={ServiceListForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserPetList"
        component={UserPetList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserAccessoryList"
        component={UserAccessoryList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={Email}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen options={{headerShown: false}} name="MyTabs" component={MyTabs} /> */}
    </Stack.Navigator>
  );
}

export default AppStack;
