import {View, StyleSheet, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';
import Layout from '../layouts/Layout';
import HomeNavigations from '../widgets/HomeNavigations';
import SearchHeader from '../widgets/SearchHeader';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {UserAuthentication} from '../redux/types/interface';
import {SET_AUTHENTICATION} from '../redux/types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const authentication: UserAuthentication = useSelector(
    (state: any) => state.authentication,
  );

  const dispatch = useDispatch();

  const setAuthenticationState = async (newState: UserAuthentication) => {
    dispatch({type: SET_AUTHENTICATION, payload: newState});

    await AsyncStorage.setItem('authentication', JSON.stringify(newState));
  };

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
        <Icon name="person-circle-outline" size={150} color="#ba63c6" />
        <TextInput
          style={styles.inputHead}
          defaultValue={authentication.fullName}
          onChangeText={e => {
            setAuthenticationState({
              ...authentication,
              fullName: e,
            });
          }}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          defaultValue={authentication.position}
          onChangeText={e => {
            setAuthenticationState({
              ...authentication,
              position: e,
            });
          }}
          placeholder="Position"
        />
        <TextInput
          style={styles.input}
          defaultValue={authentication.userName}
          onChangeText={e => {
            setAuthenticationState({
              ...authentication,
              userName: e,
            });
          }}
          placeholder="Username"
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    height: 50,
    width: '90%',
    textAlign: 'center',
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  inputHead: {
    height: 50,
    width: '90%',
    textAlign: 'center',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    fontWeight: 'bold',
  },
});
