import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },

});

const DisplayAnImageWithStyle = () => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    );

}

export default DisplayAnImageWithStyle;