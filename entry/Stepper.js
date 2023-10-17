
import React, { useEffect, useState } from 'react';
import { COLORS } from '../utils/colors';

import {

    View,
    StyleSheet,
    Text,
    Image,
    Pressable,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Stepper({ navigation }) {

    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState([
        {
            id: 1,
            image: require("../assets/secondimage.png"),
            btn: "Next",
            title: "Buy or Sell Pets",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit, sed do eiusmod tempot ut labore et dolore magna aliqua sintit occaecat cupidatat non provident. iru olor in reprehenderit in voluptate duo dolores et ea rebum."
        },
        {
            id: 2,
            image: require("../assets/secondimage.png"),
            btn: "Next",
            title: "Accessory and Food",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit, sed do eiusmod tempot ut labore et dolore magna aliqua sintit occaecat cupidatat non provident. iru olor in reprehenderit in voluptate duo dolores et ea rebum."
        },
        {
            id: 3,
            image: require("../assets/secondimage.png"),
            btn: "GET STARTED",
            title: "Pet Experts",
            description: "Lorem ipsum dolor sit amet, consecter adipiscing elit, sed do eiusmod tempot ut labore et dolore magna aliqua sintit occaecat cupidatat non provident. iru olor in reprehenderit in voluptate duo dolores et ea rebum."
        }
    ])
    const nextStep = () => {

        setCurrentStep(currentStep >= 2 ? 2 : currentStep + 1)
        if (currentStep === 2) {
            navigation.navigate("LoginScreen")
        }
        // alert(currentStep)

    }

    const prevStep = () => {
        setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1)
    }


    useEffect(() => {


    }, [navigation]);

    return (

        <>
            <SafeAreaView style={styles.main}>
                {/* <View style={styles.image}>
                    {steps[currentStep].image}
                </View> */}

                <View style={styles.container} >

                    <View style={styles.line} />
                    <Text style={styles.sheetHeading}>{steps[currentStep].title}</Text>
                    <Text style={styles.sheetDesc}>{steps[currentStep].description}</Text>

                    <Pressable
                        onPress={() => nextStep()}
                        style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>{steps[currentStep].btn}</Text>
                    </Pressable>
                    <View style={styles.stepIndicatorView}>
                        {steps.map((step, index) => {
                            return (
                                <View 
                                key={index}
                                style={{
                                    ...styles.stepIndicator,
                                    width: 10,
                                    backgroundColor: currentStep === index ? 'black' : 'grey'
                                }}></View>
                            )
                        })}
                    </View>

                  
                </View>
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#E2FC9B'
    },
    container: {
        width: "100%",
        height: "45%",
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#B1E523',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
    },
    line: {
        width: '30%',
        height: 5,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    sheetDesc: {
        textAlign: "center",
        color: "black",
        fontSize: 15,
        marginHorizontal: 15,
        marginVertical: 15,
        textAlign: 'justify',
        lineHeight: 20,
        fontFamily: 'WorkSans-Regular'
    },
    sheetHeading: {
        textAlign: "center",
        color: "black",
        fontSize: 30,
        marginVertical: 10,
        fontFamily: 'WorkSans-Bold'
    },
    ButtonContainer: {
        width: '60%',
        elevation: 2,
        backgroundColor: '#E2FC9B',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    ButtonText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'WorkSans-Bold',
        alignSelf: "center",
        textTransform: "uppercase"
    },

    stepImage: {
        width: "100%",
        height: "40%",
        marginVertical: 50
    },
    stepIndicatorView: {
        flexDirection: "row"
    },
    stepIndicator: {
        height: 10,
        marginHorizontal: 5,
        marginVertical: 15,
        borderRadius: 50
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        marginVertical: 20,
    },
    description: {
        textAlign: "center",
        paddingHorizontal: 10
    },
    navigationView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    navigationBtn: {
        backgroundColor: "#A838D7",
        height: 40,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    navigationBtnTxt: {
        color: "white",
        fontWeight: "bold"
    }, 
    titleWrapper: {

    },
    image: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },

});