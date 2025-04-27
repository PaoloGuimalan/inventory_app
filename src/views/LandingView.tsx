import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Layout from '../layouts/Layout';
import HomeNavigations from '../widgets/HomeNavigations';
import SearchHeader from '../widgets/SearchHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';
import {fetchCategories} from '../services/https/requests/items';

export default function LandingView() {
  const navigation = useNavigation<NavigationProp>();

  const [search, setsearch] = useState<string>('');
  const [categories, setcategories] = useState<string[]>([]);

  const submitSearch = useCallback(() => {
    navigation.navigate('Products', {context: search});
  }, [navigation, search]);

  useEffect(() => {
    fetchCategories()
      .then(response => {
        if (response.status) {
          setcategories(response.data.items);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Layout
      header={
        <SearchHeader
          value={search}
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
        {categories.map((mp: string, i: number) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.button}
              onPress={() => {
                navigation.navigate('Products', {context: `category:${mp}`});
              }}>
              <Icon name="category" size={80} color="#000" />
              <Text style={styles.text}>{mp}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  button: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontWeight: 'bold',
  },
});
