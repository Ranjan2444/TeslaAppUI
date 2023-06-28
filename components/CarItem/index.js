import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import Button from '../Button'

const CarItem = (props) => {
    const { name, tagLine, tagLineCTA, image } = props.car
    return (
        <View
            style={{ width: '100%', height: Dimensions.get('window').height }}
        >
            <ImageBackground
                source={image}
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
                <Text style={{ fontSize: 40, fontWeight: '500' }}>{name}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                    {tagLine}{' '}
                    <Text
                        style={{
                            fontSize: 16,
                            textDecorationLine: 'underline',
                            color: 'gray',
                        }}
                    >
                        {tagLineCTA}
                    </Text>
                </Text>
            </View>
            <View style={{ position: 'absolute', bottom: 50, width: '100%' }}>
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
        </View>
    )
}

export default CarItem
