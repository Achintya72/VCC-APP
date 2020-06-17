import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class EventCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            date: props.date,
            location: props.location,
            startTime: props.startTime,
            endTime: props.endTime,
            description: props.description
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick(this);
    }
    render() {
        return (
            <View >
                <TouchableOpacity style={styles.container} onPress={() => this.handleClick()}>
                    <Text style={styles.heading}>{this.state.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'yellow',
        borderRadius: 10,
        marginVertical: 15,
        paddingVertical: 60,
        opacity: 0.8
    },
    heading: {
        alignSelf: 'center',
        paddingHorizontal: '20%',
        fontSize: 30,
        fontFamily: 'Raleway-Black',
        flex: 1,
        color: 'blue'
    }
})