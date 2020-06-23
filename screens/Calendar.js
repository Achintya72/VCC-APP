import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import VedicCalendarData from '../VedicCalendar.json';
import HeaderDisplay from './HeaderDisplay';

export default class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            currentMonth: new Date().getMonth(),
            selectedDate: { date: new Date().getDate(), month: new Date().getMonth()},
            startingDayOfMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
        }
    }
    handleClick(clickedDay){
        console.log(clickedDay);
    }
    render() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        return (
            <View style={styles.container}>
                <HeaderDisplay 
                    month={this.state.currentMonth} 
                    startingDayOfMonth={this.state.startingDayOfMonth} 
                    selectedDate={this.state.selectedDate} 
                    handleClick={this.state.handleClick} />
                
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