import { StyleSheet, Text, TouchableOpacity,View } from 'react-native'
import React from 'react'
import { windowHeight } from '../utils/Dimensions'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function SocialButton({buttonTitle,btnType,color,backgroundColor,...rest}) {
    let bgColor = backgroundColor
  return (
    <TouchableOpacity
     style = {[styles.buttonContainer,{backgroundColor: bgColor}]}
     {...rest}
     >
        <View style = {styles.iconWrapper}>
            <Icon name = {btnType} style = {styles.icon} size = {22} color = {color} />
        </View>
        <View style = {styles.btnTxtWrapper}>
           <Text style = {[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </View>

    </TouchableOpacity>
  )
}  

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#B1E523'

    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold'
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})