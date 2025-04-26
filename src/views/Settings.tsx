import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../layouts/Layout';
import HomeNavigations from '../widgets/HomeNavigations';

export default function Settings() {
  return (
    <Layout footer={<HomeNavigations />}>
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
