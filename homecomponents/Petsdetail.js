import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';

export default function Petsdetail() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/dogimage.png')} />
      <View style = {styles.container}>
       <Text>Golder Reteriver</Text>
      <View style={styles.price}>
        <Text style={styles.heading}>9,500</Text>
        <Text>Negotiatiable</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.heading}>Status</Text>
        
      </View>
      <View style={styles.description}>
        <Text>Product Description</Text>
        <Text>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Text>
      </View>
      <View style = {styles.buttons}>
      <TouchableOpacity style = {styles.ButtonContainer2}>
        <Text style = {styles.ButtonText}>03324505805</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.ButtonContainer}>
        <Text style = {styles.ButtonText}>Whatsapp chat</Text>
      </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: 'pink'
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 410,
    height: 300,
  },
  description: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  detail: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  price: {
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'

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
});
