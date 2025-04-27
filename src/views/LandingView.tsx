import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import Layout from '../layouts/Layout';
import HomeNavigations from '../widgets/HomeNavigations';
import SearchHeader from '../widgets/SearchHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LandingView() {
  const navigation = useNavigation<NavigationProp>();

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Icon name="category" size={80} color="#000" />
          <Text style={styles.text}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="category" size={80} color="#000" />
          <Text style={styles.text}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="category" size={80} color="#000" />
          <Text style={styles.text}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="category" size={80} color="#000" />
          <Text style={styles.text}>Tools</Text>
        </TouchableOpacity>
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
