import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../layouts/Layout';

export const ProductListing = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Product</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
