
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  

  const [loading,error,weather] = useGetWeather()
  console.log(loading,error,weather)
  
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/> 
      </NavigationContainer>
    )
  }
  return(
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'red'}/>
    </View>
  )
}






const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  }
})
export default App