import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Places } from './Screens2';
import Pois from './PoisScreen';
import Maps from './MapScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const PoisStack = createStackNavigator();
const MapsStack = createStackNavigator();

const PoisStackScreen = () => (
  <PoisStack.Navigator>
    <PoisStack.Screen name="Pois" component={Pois} />
    <PoisStack.Screen name="Home" component={Home} />
  </PoisStack.Navigator>
)

const MapsStackScreen = () => (
  <MapsStack.Navigator>
    <MapsStack.Screen name="Maps" component={Maps} />
    <PoisStack.Screen name="Home" component={Home} />
  </MapsStack.Navigator>
)

function BasicTabs() {
  return (
      <Tabs.Navigator>
        <Tabs.Screen name="POIs" component={Pois} />
        <Tabs.Screen name="Maps" component={Maps} />
      </Tabs.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Places" component={BasicTabs} />
        <Stack.Screen name="POIs" component={BasicTabs} />
        <Stack.Screen name="Maps" component={BasicTabs} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

{/*export default () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Pois" component={PoisStackScreen} />
      <Tabs.Screen name="Maps" component={MapsStackScreen} />
    </Tabs.Navigator>
  
    {/*<Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
  );*/}

