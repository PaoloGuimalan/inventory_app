import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import Layout from '../layouts/Layout';
import SearchHeader from '../widgets/SearchHeader';

export const ProductListing = () => {
  const [search, setsearch] = useState<string>('');

  const submitSearch = useCallback(() => {
    console.log(search);
  }, [search]);

  return (
    <Layout
      header={
        <SearchHeader
          showBackButton={false}
          onEdit={e => {
            setsearch(e);
          }}
          onSubmit={() => {
            submitSearch();
          }}
        />
      }>
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
