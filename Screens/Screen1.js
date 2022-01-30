import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
export const Screen1 = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.headerStyle}>Screen 1</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to Details Screen"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    fontWeight: '500',
  },
});
