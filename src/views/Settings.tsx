import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Layout from '../layouts/Layout';
import HomeNavigations from '../widgets/HomeNavigations';
import SearchHeader from '../widgets/SearchHeader';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SET_RECORDS_PER_PAGE} from '../redux/types/types';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';

export default function Settings() {
  const navigation = useNavigation<NavigationProp>();
  const recordsperpage: number = useSelector(
    (state: any) => state.recordsperpage,
  );

  const [recordsperpagetemp, setrecordsperpagetemp] = useState<string>('');

  const dispatch = useDispatch();

  const setRecordsPerPageState = async (newState: string) => {
    if (newState.trim() !== '') {
      dispatch({type: SET_RECORDS_PER_PAGE, payload: parseInt(newState, 10)});

      await AsyncStorage.setItem('recordsperpage', newState);

      setrecordsperpagetemp('');

      return;
    }

    Toast.show('Please input a number', Toast.SHORT);
  };

  const [search, setsearch] = useState<string>('');

  const submitSearch = useCallback(() => {
    navigation.navigate('Products', {context: search});
  }, [navigation, search]);

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
        <TextInput
          style={styles.input}
          defaultValue={recordsperpagetemp}
          keyboardType="numeric"
          onChangeText={e => {
            setrecordsperpagetemp(e);
          }}
          placeholder={`Records per page: ${recordsperpage}`}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setRecordsPerPageState(recordsperpagetemp);
          }}>
          <Icon name="save" size={28} color="#000" />
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
    paddingTop: 25,
    // justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 15,
  },
  input: {
    height: 50,
    width: '100%',
    textAlign: 'center',
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  button: {
    // flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
