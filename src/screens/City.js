import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView,Text, StyleSheet, ImageBackground, View } from 'react-native'
 import Icontext from '../components/Icontext';

const City = () => {
    const { container,imageLayout,countryName,cityName,cityText,populationWrapper,populationText,riseSetWrapper,riseSetText,rowLayout } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../assets/city-bg.jpg')}
                style={imageLayout}    
            >
                <View>
                    <Text style={[cityName,cityText]}>London</Text>
                    <Text style={[countryName,cityText]}>UK</Text>
                </View>

                <View style={[populationWrapper, rowLayout]}>
                    <Icontext iconName ={'user'} iconColor ={'red'} bodyText ={'8000'} bodyTextStyle ={populationText}/>
                </View>

                <View style={[riseSetWrapper, rowLayout]}>
                    <Icontext iconName ={'sunrise'} iconColor ={'white'} bodyText ={'06:12:34am'} bodyTextStyle ={riseSetText}/>
                    <Icontext iconName ={'sunset'} iconColor ={'white'} bodyText ={'18:46:21pm'} bodyTextStyle ={riseSetText}/>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName:{
        fontSize: 40,
    },
    countryName:{
        fontSize: 30,
    },
    cityText: {
        alignSelf: 'center',
        justifyContent: 'center', 
        color: 'black',
        fontWeight: 'bold'
    },
    populationWrapper:{
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper:{
        justifyContent: 'space-around' ,
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }

})

export default City