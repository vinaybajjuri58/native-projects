import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
export const Screen2 = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.headerStyle}>Screen 2</Text>
      <Button
        onPress={() => navigation.navigate('Screen1')}
        title="Go to Screen 1"
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
