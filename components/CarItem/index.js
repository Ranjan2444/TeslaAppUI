import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../Button'

const CarItem = (props) => {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    position: 'absolute',
                }}
            />

            <View
                style={{
                    marginTop: '30%',
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 40, fontWeight: '500' }}>Model S</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                    Starting at $69,422
                </Text>
            </View>
            <Button
                type="primary"
                content={'Custom Order'}
                onPress={() => {
                    console.warn('Custom Order')
                }}
            />
            <Button
                type="secondary"
                content={'Existing Inventory'}
                onPress={() => {
                    console.warn('Existing Inventory')
                }}
            />
        </View>
    )
}

export default CarItem
