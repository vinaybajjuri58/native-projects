/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Screen1, Screen2} from './Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Screen1" component={Screen1} />
        <MyStack.Screen name="Screen2" component={Screen2} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 4,
  },
});

export default App;
