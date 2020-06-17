import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Calendar from './screens/Calendar';
import Donations from './screens/Donations';
import Classes from './screens/Classes';
import { ActivityIndicator } from 'react-native-paper';
import * as Font from 'expo-font';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: styles.navigator,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-notifications" color={color} size={24} />
          ),
          tabBarColor: '#1A6874',
        }}
      />
      <Tab.Screen
        name="Classes"
        component={Classes}
        options={{
          tabBarLabel: 'Classes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={24} />
          ),
          tabBarColor: '#F18F01',
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={24} />
          ),
          tabBarColor: '#950952',
        }}
      />
      <Tab.Screen
        name="Donations"
        component={Donations}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="credit-card-outline" color={color} size={24} />
          ),
          tabBarColor: '#2E86AB',
        }}
      />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      assetsLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Raleway-Black' : require('./assets/fonts/Raleway-Black.ttf'),
      'Raleway-ExtraBold' : require('./assets/fonts/Raleway-ExtraBold.ttf'),
      'SourceSansPro-Regular' : require('./assets/fonts/SourceSansPro-Regular.ttf'),
      'SourceSansPro-SemiBold' : require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
      'Roboto-Black' : require('./assets/fonts/Roboto-Black.ttf'),
    });
    this.setState({ assetsLoaded: true });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.assetsLoaded ? (
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        ) : (
          <ActivityIndicator size='large' />
        )}

      </View>
    )
  }
}
const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#1A6874',
    paddingVertical: 5
  }
})

// C4AF9A
// 155149