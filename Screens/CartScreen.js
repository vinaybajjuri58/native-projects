import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
export const CartScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerStyle}>Cart Page : </Text>
      <Button
        title="Go to products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
