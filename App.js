import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import PreferencesScreen from './src/screens/PreferenceScreen'; 
import SummaryScreen from './src/screens/SummaryScreen';
import GenerateTravel from './src/screens/GenerateTravel';
import HintScreen from './src/screens/HintScreen';
import GenererDagsplan from './src/screens/GenererDagsplan';
import WelcomeScreen from './src/screens/WelcomeScreen';
import PlanTravel from './src/screens/PlanTravel';
import RevealScreen from './src/screens/RevealScreen';






const Stack = createStackNavigator();

function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F1EEE4'
          }
        }} >

      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Plan" component={PlanTravel}/>
      <Stack.Screen name="Preferences" component={PreferencesScreen}/>
      <Stack.Screen name="Summary" component={SummaryScreen}/>
      <Stack.Screen name="Generate" component={GenerateTravel}/>
      <Stack.Screen name="Reveal" component={RevealScreen}/>
      <Stack.Screen name="Hint" component={HintScreen}/>
      <Stack.Screen name="Dagsplan" component={GenererDagsplan}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

