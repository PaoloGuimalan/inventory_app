import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import Layout from '../layouts/Layout';
import SearchHeader from '../widgets/SearchHeader';
import Icon from 'react-native-vector-icons/Ionicons';

export const ProductListing = () => {
  const [search, setsearch] = useState<string>('');

  const submitSearch = useCallback(() => {
    console.log(search);
  }, [search]);

  return (
    <Layout
      header={
        <SearchHeader
          showBackButton
          onEdit={e => {
            setsearch(e);
          }}
          onSubmit={() => {
            submitSearch();
          }}
        />
      }>
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon name="cart" size={50} color="#000" />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Apple Watch</Text>
            <Text style={styles.itemDesc}>This is a description</Text>
          </View>
          <Text style={styles.pricetext}>$ 13.00</Text>
        </View>
        <View style={styles.item}>
          <Icon name="cart" size={50} color="#000" />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Apple Watch</Text>
            <Text style={styles.itemDesc}>This is a description</Text>
          </View>
          <Text style={styles.pricetext}>$ 13.00</Text>
        </View>
        <View style={styles.item}>
          <Icon name="cart" size={50} color="#000" />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Apple Watch</Text>
            <Text style={styles.itemDesc}>This is a description</Text>
          </View>
          <Text style={styles.pricetext}>$ 13.00</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  item: {
    width: '100%',
    padding: 15,
    minHeight: 70,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10',
  },
  itemDetails: {
    flex: 1,
    height: '100%',
  },
  pricetext: {
    fontWeight: 'bold',
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemDesc: {
    fontSize: 14,
  },
});
