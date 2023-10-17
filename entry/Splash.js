 
import React, { useEffect } from 'react';
import {

  View,
  StyleSheet,
  Text
   
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
 
export default function Splash({navigation}) {
  const isFocused = useIsFocused(); 
 
  useEffect(() => {
   
   
    if(isFocused)
    {
      setTimeout(()=>{
        navigation.navigate("Step1")
   }, 2000);
  

    }
    
  },[isFocused,navigation]);
 
  return (

    <SafeAreaView style={styles.container} >
    
    <View style={styles.view}>
     
    <Text style = {styles.mainText}>Animal Land</Text>
      {/*  Here Image of LOGO will be placed.. */}
    
      {/* <Image source={require('../../assets/goals.png')} 
       style={styles.splashImage} resizeMode="contain"/>   */}
    
    </View>
    
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
    container: {
      
      flex: 1,
   
    },
    view:{
      flex: 1,
      backgroundColor: '#B1E523',
      alignItems: 'center', 
    },
    mainText: {
        marginTop: 350,
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: 'black'
    },
      
     
  
  });