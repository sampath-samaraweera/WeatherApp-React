import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main:{
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 12:00:00",
        main:{
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 12:00:00",
        main:{
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    }
]

const UpcommingWeather = () =>{
    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/> 
    )
    const { container, image } = styles
    return(
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../assets/upcomming-bg.jpg')} style={image}
            >   
                <Text>Upcoming Weather</Text>

                <FlatList
                    data = {DATA}
                    renderItem = {renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
                
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue',
    },
    image:{
        flex: 1,
    }
});

export default UpcommingWeather;