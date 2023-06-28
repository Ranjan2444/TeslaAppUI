import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = (props) => {
    // const type = props.type
    // const content = props.content
    // const onPress = props.onPress

    const { type, content, onPress } = props

    const backgroundColor = type === 'primary' ? '#36454F' : 'white'
    const textColor = type === 'primary' ? 'white' : 'black'
    return (
        <View style={{ width: '100%', padding: 10 }}>
            <Pressable
                style={{
                    backgroundColor: backgroundColor,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => onPress()}
            >
                <Text
                    style={{
                        color: textColor,
                        fontSize: 12,
                        fontWeight: '500',
                        textTransform: 'uppercase',
                    }}
                >
                    {content}
                </Text>
            </Pressable>
        </View>
    )
}

export default Button
