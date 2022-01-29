/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter(initial => initial + 1);
  };
  const decrementHandler = () => {
    setCounter(initial => initial - 1);
  };
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Counter Application</Text>
      <Text style={styles.sectionSubTitle}>Counter Value : {counter}</Text>
      <View style={styles.buttonCountainer}>
        <Button
          title="Decrement"
          color="red"
          onPress={decrementHandler}
          style={styles.buttonStyle}
          accessibilityLabel="DECREMENT"
        />
        <Button
          title="Increment"
          color="green"
          onPress={incrementHandler}
          style={styles.buttonStyle}
          accessibilityLabel="INCREMENT"
        />
      </View>
    </View>
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
  sectionSubTitle: {
    fontSize: 18,
    fontWeight: '400',
    padding: 4,
  },
  buttonCountainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    padding: 1,
    margin: 2,
  },
});

export default App;
