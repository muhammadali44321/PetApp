import { StyleSheet, Text, View,Image,TouchableOpacity,Modal,Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Expertdetail({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
        <View style = {styles.bar}></View>
        <View style = {styles.container}>
            <Image style = {styles.image} source={require('../assets/hospital.png')} />
            <View style = {styles.headingtext}>
                <Text style = {styles.heading}>Ali Pets Services</Text>
                <Text style = {styles.subheading}>Vertinary Doctor</Text>
            </View>
        </View>
        <View style = {styles.bar2}></View>    
            <View style = {styles.aboutText}>
                <Text style = {styles.about}>About</Text>
                <Text>Muhammad Ali is on of the best animal doctor in</Text>
                <Text>Lahore with a high patient satisfaction rate</Text>
            </View>
            <View style = {styles.aboutText}>
                <Text style = {styles.about}>Services</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut rutrum nisi. Curabitur molestie ornare mollis. Curabitur in ipsum enim. Duis a diam rhoncus, posuere mi at, rhoncus libero. Pellentesque feugiat iaculis libero, sed dictum urna dapibus sit amet. Duis id lacus id nisl aliquam elementum.</Text>
            </View>

            <View style = {styles.aboutText}>
                <Text style = {styles.about}>Location</Text>
                <Text>Ali pets Services</Text>
                <Text>BOR Johar Town Johar Town, Lahore</Text>
            </View>
            <View style = {styles.buttons}>
            <TouchableOpacity style = {styles.ButtonContainer2}>
              <Text style = {styles.ButtonText}>WhatsappChat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}  style = {styles.ButtonContainer}>
            <Text style = {styles.ButtonText}>Appiontment</Text>
          </TouchableOpacity>
          </View>
          <Modal transparent = {true} visible = {modalVisible}>
        <View style = {styles.modal}>
            <View style = {styles.container}>
               <View style = {styles.icon2}><Text>Doctor</Text></View>
                <Text style = {styles.modalHeading}>Success</Text>
                <Text style = {styles.modalText}>input fields</Text>
                <Pressable
                  onPress={() => { navigation.goBack()}}  
                   style={styles.ButtonContainer}>
                  <Text style={styles.ButtonText}>Submit</Text>
                </Pressable>
            </View>
        </View>
     </Modal>

         </View>
       
      
      
   
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
        marginTop: 15,
        marginHorizontal: 25,
        alignItems: 'center'

    },
    bar: {
        marginTop: 50,
        width: '90%',
        height: 2,
        backgroundColor: 'black',
        alignSelf: 'center'

    },
    bar2: {
        marginTop: 20,
        width: '90%',
        height: 2,
        backgroundColor: 'black',
        alignSelf: 'center'

    },
    image: {
        marginTop:10,
        height: 90,
        width: 90,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 200
    },
    headingtext: {
        marginLeft: 20
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    subheading: {
        fontSize: 16,
        color: 'black'
    },
    aboutText: {
        marginHorizontal: 25,
        marginTop: 20,

    },
    about: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    
      },
      ButtonContainer: {
        width: '45%',
        elevation: 2,
        borderColor: '#E2FC9B',
        borderWidth: 3,
        backgroundColor: '#B1E523',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 30,
        marginBottom: 50,
        alignSelf: "center",
    
    },
    ButtonContainer2: {
      width: '45%',
      elevation: 2,
      borderColor: '#B1E523',
      borderWidth: 3,
      backgroundColor: '#E2FC9B',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      marginTop: 30,
      marginBottom: 50,
      alignSelf: "center",
    
    },
    ButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: "bold",
        alignSelf: "center",
        
    },
    modal: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center'
    },

    container: {
        backgroundColor: '#fff',
        marginHorizontal: 35,
        paddingVertical: 40,
        borderRadius: 30

    },
    icon2: {
        alignSelf: 'center'

    },
    modalHeading: {
        fontSize: 24,
        fontFamily:'WorkSans-Bold',
        color: 'black',
        alignSelf: 'center'
    },

    modalText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        alignSelf: 'center',
        marginBottom: 10,

    }
    });