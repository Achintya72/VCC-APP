import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import VedicCalendarData from '../VedicCalendar.json';

export default class Calendar extends Component{
    constructor(){
        super();
        this.state = {
            dayOfMonthStart: 0,
            month: 0,
            day: 0,
            year: 0
        };
    }
    componentDidMount(){
        const date = new Date();
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
        const startingDate = new Date(year, month, 1);
        this.setState({
            dayOfMonthStart: startingDate.getDay(),
            day: day,
            month: month,
            year: year
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.year}, {this.state.month}, {this.state.day}, {this.state.dayOfMonthStart}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});