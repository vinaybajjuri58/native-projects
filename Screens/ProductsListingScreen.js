import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
export const ProductsListingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerStyle}>Products : </Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerStyle: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
});
