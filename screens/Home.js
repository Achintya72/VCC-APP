import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Modal, Text, Linking } from 'react-native';
import Events from '../Events.json';
import EventCard from './HomeComponents/EventCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: [],
            location: [],
            startTime: '',
            endTime: '',
            description: '',
            modalVisible: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.setState({
            modalVisible: false
        })
        console.log('close');
    }
    handleClick(clickedEvent) {
        this.setState({
            modalVisible: true,
            name: clickedEvent.state.name,
            date: clickedEvent.state.date,
            location: clickedEvent.state.location,
            startTime: clickedEvent.state.startTime,
            endTime: clickedEvent.state.endTime,
            description: clickedEvent.state.description
        });
    }
    render() {

        const events = Events.sort((event1, event2) => {
            let a = event1.EventDate[0] + event1.EventDate[1];
            let b = event2.EventDate[0] + event2.EventDate[1];
            return a - b;
        })
        const eventsToRender = events.map(event => {
            return (
                <EventCard
                    name={event.EventName}
                    date={event.EventDate}
                    location={event.EventLocation}
                    startTime={event.EventStartTime}
                    endTime={event.EventEndTime}
                    description={event.EventDescription}
                    handleClick={this.handleClick}
                    key={event.id} />
            )
        })
        return (
            <View style={styles.container}>
                <ScrollView>
                    {eventsToRender}
                </ScrollView>
                <Modal visible={this.state.modalVisible} animationType='slide' transparent={false} style={styles.modal}>
                    <AntDesign name="close" style={{alignSelf: 'flex-end'}}size={40} color="blue" onPress={() => {
                        this.setState({modalVisible: false});
                        console.log('close');
                        }} />
                    <Text style={styles.heading}>{this.state.name}</Text>

                    <View style={styles.textContainer}>
                        <MaterialCommunityIcons name="text" size={25} style={styles.icon} color="white" />
                        <Text style={styles.text}>{this.state.description}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <MaterialCommunityIcons name="calendar" size={25} style={styles.icon} color="white" />
                        <Text style={styles.text}>{this.state.date[0]} / {this.state.date[1]}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <MaterialIcons name="access-time" size={25} style={styles.icon} color="white" />
                        <Text style={styles.text}>From {this.state.startTime} to {this.state.endTime}</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <MaterialIcons name="location-on" size={25} style={styles.icon} color="white" />
                        <Text style={styles.linkText} onPress={() => Linking.openURL(this.state.location[1])}>{this.state.location[0]}</Text>
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        alignSelf: 'center',
        paddingHorizontal: '20%',
        paddingVertical: 10,
        fontSize: 30,
        fontFamily: 'Raleway-Black',
        color: 'blue'
    },
    modal: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textContainer: {
        paddingVertical: 5,
        width: '95%',
        alignSelf: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    text: {
        paddingHorizontal: 2,
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 20,
        alignSelf: 'center',
        flex: 1
    },
    linkText: {
        alignSelf: 'center',
        color: 'blue',
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 20,
        paddingVertical: 5
    },
    icon : {
        paddingHorizontal: 5, 
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        paddingVertical: 4,
        marginRight: 5
    }
})