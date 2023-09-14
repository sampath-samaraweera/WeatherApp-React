
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'


export const useGetWeather = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

  
    const fetchWeatherData = async () => {
      try {    
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=6.7956045276984804&lon=79.90088855581739&appid=94168cca70eb60b1b3268bcfdb09a63d`)
        const data = await res.json()
        setWeather(data)
      } catch (e) {
        setError('Could not fetch weather')
      } finally {
        setLoading(false)
      }
    }
  
    useEffect(() => {
      ;(async () => {
        let status = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted'){
          setError('Permission to access locaation was denied')
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData()
      })()
    }, [lat,lon])
    return (loading, error, weather)
}