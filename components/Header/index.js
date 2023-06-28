import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View
            style={{
                position: 'absolute',
                top: 35,
                zIndex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 20,
            }}
        >
            <Image
                style={{ width: 100, height: 20, resizeMode: 'contain' }}
                source={require('../../assets/images/logo.png')}
            />
            <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={require('../../assets/images/menu.png')}
            />
        </View>
    )
}

export default Header
