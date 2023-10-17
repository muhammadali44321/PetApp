import React from "react";
import { Text,View,StyleSheet,Image,TouchableOpacity} from "react-native";

function Account() {
    return(
        <View>
           <View style = {styles.container}>
            <View style = {styles.profile}>
                <View>
                    <Text style = {styles.name}>Muhammd Ali</Text>
                    <Text>muhammadaliamir145@gmail.com</Text>
                    <Text>09876543321</Text>
                </View>
              <Image style = {styles.image}/>
            </View>
           </View>
           <TouchableOpacity style = {styles.ButtonContainer}>
            <Text style = {styles.ButtonText}>Edit Profile</Text>
           </TouchableOpacity>
           
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2Fc9B',
        height: '50%',
        elevation: 5
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 20


    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    image:{
        borderWidth:5,
        borderColor: '#B1E523',
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    ButtonContainer: {
        width: '35%',
        elevation: 2,
        backgroundColor: '#B1E523',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 30,
        marginBottom: 70,
        alignSelf: 'flex-end',
        marginRight: 20,
    
    },
    ButtonText: {
        fontSize: 14,
        color: 'black',
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})

export default Account;