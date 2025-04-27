import Axios from 'axios';
import {configs} from '../../../config/config';
import {GET} from '../endpoints/items';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserAuthentication} from '../../../redux/types/interface';

const getPermission = async () => {
  const authenticationcache = await AsyncStorage.getItem('authentication');

  if (authenticationcache) {
    const permission: UserAuthentication = JSON.parse(authenticationcache);

    return permission.position;
  }

  Toast.show('You are not authenticated', Toast.LONG);
  return null;
};

const getRecordsPerPage = async () => {
  const recordsperpagecache = await AsyncStorage.getItem('recordsperpage');

  if (recordsperpagecache) {
    const recordsperpage: number = parseInt(recordsperpagecache, 10);

    return recordsperpage;
  }

  return 10;
};

export const fetchCategories = async () => {
  const permission = await getPermission();

  return await Axios.get(`${configs.API_URL}${GET.category.all}`, {
    headers: {
      permission: permission,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      Toast.show(err.response.data.message, Toast.LONG);
    });
};

export const fetchItemsWContext = async (context: string, page: number) => {
  const permission = await getPermission();
  const limit = await getRecordsPerPage();

  return await Axios.get(`${configs.API_URL}${GET.items.search}${context}`, {
    headers: {
      permission: permission,
      limit,
      page,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      Toast.show(err.response.data.message, Toast.LONG);
    });
};

export const fetchItemsByCategories = async (context: string, page: number) => {
  const permission = await getPermission();
  const limit = await getRecordsPerPage();

  return await Axios.get(
    `${configs.API_URL}${GET.items.searchByCategory}${context}`,
    {
      headers: {
        permission: permission,
        limit,
        page,
      },
    },
  )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      Toast.show(err.response.data.message, Toast.LONG);
    });
};
