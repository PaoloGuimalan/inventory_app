import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import Layout from '../layouts/Layout';
import HomeNavigations from '../widgets/HomeNavigations';
import SearchHeader from '../widgets/SearchHeader';
// import {useSelector} from 'react-redux';

export default function LandingView() {
  // const authentication = useSelector((state: any) => state.authentication);

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
      }
      footer={<HomeNavigations />}>
      <View style={styles.container}>
        <Text>LandingView</Text>
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
