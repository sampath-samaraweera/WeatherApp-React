
import React from 'react';
import UpcommingWeather from '../screens/UpcommingWeather';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()


const Tabs = () => {
  
    return (
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'lightblue'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: 'tomato',
            
          }
        }}>
          <Tab.Screen name={'Current'} options={{
              tabBarIcon: ({focused}) => 
                <Feather 
                  name={'droplet'} 
                  size={25} 
                  color={focused ? 'tomato' : 'black'} 
                />
            }}
          >
            {() => <CurrentWeather weatherData = {weather.list[0]}/> }
          </Tab.Screen>

          <Tab.Screen name={'Upcoming'} component={UpcommingWeather} options={{
              tabBarIcon: ({focused}) => 
                <Feather 
                  name={'clock'} 
                  size={25} 
                  color={focused ? 'tomato' : 'black'} 
                />
            }}
          />

          <Tab.Screen name={'City'} component={City} options={{
              tabBarIcon: ({focused}) => 
                <Feather 
                  name={'home'} 
                  size={25} 
                  color={focused ? 'tomato' : 'black'} 
                />
            }}
          />
      </Tab.Navigator>
  )
}

export default Tabs