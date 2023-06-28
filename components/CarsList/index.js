import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import CarItem from '../CarItem'
import cars from './cars'

const CarList = () => {
    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarList
