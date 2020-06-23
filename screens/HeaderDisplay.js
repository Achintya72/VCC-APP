import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-element';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class HeaderDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: props.month,
            selectedDate: props.selectedDate,
            startingDayOfMonth: props.startingDayOfMonth
        }
    }
    leftArrow(props) {
        return (
            <TouchableWithoutFeedback onPress={this.handleClick(-1)}>
                <AntDesign name="left" size={30} color="white" />
            </TouchableWithoutFeedback>
        )
    }
    rightArrow(props) {
        return (
            <TouchableWithoutFeedback onPress={this.handleClick(1)}>
                <AntDesign name="right" size={30} color="white" />
            </TouchableWithoutFeedback>
        )
    }
    handleClick(number) {
        let currentMonth = this.state.month;
        currentMonth += number;
        this.setState({
            month: currentMonth,
            selectedDate: {
                date: 1,
                month: currentMonth
            },
            startingDayOfMonth: new Date(new Date().getFullYear(), currentMonth, 1).getDay()
        })
    }
    render() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle='light-content'
                    leftComponent={this.leftArrow}
                    centerComponent={{ text: months[this.state.month], style: { fontFamily: 'Roboto-Black', fontSize: 24, color: 'white' } }}
                    rightComponent={this.rightArrow}
                    containerStyle={{
                        backgroundColor: '#950952'
                    }}>
                </Header>

            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingVertical: 10,
        color: 'white',
        alignContent: 'center'
    }
});