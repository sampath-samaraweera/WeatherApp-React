
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RowText from '../components/RowText';
import { WeatherType } from '../utilities/WeatherType';

const CurrentWeather = ( {weatherData} ) => {
  const { wrapper,container,temp,feels,highLowWrapper,highLow,bodyWrapper,description,message} = styles
  console.log(weatherData)  
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>        
        <Text style={feels}>Feels like 5</Text>

        <RowText 
          messageOne={'High: 8'} 
          messageTwo={'Low: 5'} 
          containerStyle={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />

      </View>        
      
      <RowText
          messageOne={'Its sunny'} 
          messageTwo={WeatherType['Tunderstorm'].message} 
          containerStyle={bodyWrapper}
          messageOneStyle={description}
          messageTwoStyle={message}
        />


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({  
  wrapper:{
    flex: 1,
    backgroundColor:'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow:{
    color: 'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row',
  },
  bodyWrapper: {
    paddingLeft: 25,
    paddingBottom: 25,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  }
});

export default CurrentWeather