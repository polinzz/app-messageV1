import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';


export default function Message( { message, messageContent, key } ) {
    const styleMessage = message.sender === 1 ? [styles.message, styles.message1] : [styles.message, styles.message2]
    const styleContainer = message.sender === 1 ? [styles.container, styles.container1] : [styles.container, styles.container2]
    return (
        <View key={key} style={styleContainer}>
            {
                message.sender === 1 ? (
                    <Image style={styles.profileImage} source={require('../assets/elonee.jpg')} />
                ) : null
            }
            <Text style={styleMessage}>
                {message.content}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        gap: 12,
        width: '80%',
    },
    container1: {
        alignSelf: 'flex-start',
    },
    container2: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    profileImage: {
        width: 40,
        height: 40,
        objectFit: 'contain',
        borderRadius: 90,
        marginTop: 2,
    },
    message: {
        borderWidth: 0.5,
        borderRadius: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        maxWidth: 400,
        color: '#F0F0F0',
        flex: 0,
    },
    message1: {
        borderColor: '#737373'
    },
    message2: {
        backgroundColor: '#434343'
    }
})