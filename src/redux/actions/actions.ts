import {UserAuthentication} from '../types/interface';
import {UserAuthenticationState} from '../types/states';
import {SET_AUTHENTICATION, SET_RECORDS_PER_PAGE} from '../types/types';

interface Dispatch<T> {
  type: string;
  payload: T;
}

export const setAuthentication = (
  state: UserAuthentication = UserAuthenticationState,
  action: Dispatch<UserAuthentication>,
) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return action.payload;
    default:
      return state;
  }
};

export const setRecordsPerPage = (
  state: number = 10,
  action: Dispatch<number>,
) => {
  switch (action.type) {
    case SET_RECORDS_PER_PAGE:
      if (action.payload > 100) {
        return 100;
      }

      if (action.payload < 10) {
        return 10;
      }

      return action.payload;
    default:
      return state;
  }
};
