/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ProductsListingScreen, CartScreen} from './Screens';
import {DataProvider} from './Context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <DataProvider>
        <MyStack.Navigator>
          <MyStack.Screen name="Products" component={ProductsListingScreen} />
          <MyStack.Screen name="Cart" component={CartScreen} />
        </MyStack.Navigator>
      </DataProvider>
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
