import React from "react";
import { Text,View,StyleSheet,Image} from "react-native";

function Notification() {
    return(
        <View style = {{flexDirection: 'row',justifyContent: 'space-around'}}>
           <View style = {styles.container}>
           <Image style = {styles.imageone} source={require('./assets/Itemone.png')}/>
           <Text style = {styles.text}>Cat Food</Text>
           <Text>Rs: 1250</Text>


           </View>

           <View style = {styles.container}>
           <Image style = {styles.imageone} source={require('./assets/Itemtwo.png')}/>
           <Text style = {styles.text}>Dog Food</Text>
           <Text>Rs: 1250</Text>
           </View>

        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: 'orange',
        borderWidth: 5,
        height: 200,
        width: 140,
        marginLeft: 10

    },
    imageone:{
        height: 100,
        width: 100,
        marginBottom: 25

    },
    imagetwo: {
        height: 100,
        width: 100,

    },
    text: {
        fontSize: 25
        
    }


})

export default Notification;