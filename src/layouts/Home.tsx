import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReactNode, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SET_AUTHENTICATION, SET_RECORDS_PER_PAGE} from '../redux/types/types';

interface HomeProps {
  children: ReactNode;
}

const Home = ({children}: HomeProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = async () => {
      const authcache = await AsyncStorage.getItem('authentication');
      const recordsperpagecache = await AsyncStorage.getItem('recordsperpage');

      if (recordsperpagecache) {
        dispatch({
          type: SET_RECORDS_PER_PAGE,
          payload: parseInt(recordsperpagecache, 10),
        });
      }

      if (authcache) {
        dispatch({
          type: SET_AUTHENTICATION,
          payload: JSON.parse(authcache),
        });
      }
    };

    checkAuthentication();
  }, [dispatch]);

  return children;
};

export default Home;
