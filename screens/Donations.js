import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Donations() {
    return (
        <View style={styles.container}>
            <Text> Donations</Text>
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