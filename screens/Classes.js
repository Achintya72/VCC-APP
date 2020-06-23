import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Classes() {
    return (
        <View style={styles.container}>
            <Text> Classes</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});