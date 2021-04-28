import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
// Styles
import CarListStyle from '../styles/CarsListStyle';
// Components
import CarItem from './CarItem';
// Data
import cars from '../data/cars';

function CarsList(props) {
    return (
        <View style={CarListStyle.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item}/>}
                keyExtractor={item => item.key}
                snapToAlignment={'start'}
                decelerationRate={'normal'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CarsList;