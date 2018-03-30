import * as UsersActions from '../Actions/users.actions';
import { Users } from '../models/users.model';
import {GET_USERS, GET_USERS_SUCCESS} from '../Actions/users.actions';

export type Action = UsersActions.All;

/// Reducer function
export function usersReducer(state: Users, action: Action) {

  switch (action.type) {

    case UsersActions.GET_USERS:
      return { ...state, loading: true };

    case UsersActions.GET_USERS_SUCCESS:
      return { ...state, ...action.payload, loading: false };

    default:
      return state;

  }
}
