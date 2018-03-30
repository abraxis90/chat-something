import {Action} from '@ngrx/store';
import {Users} from '../Models/users.model';

export const GET_USERS = 'Users get';
export const GET_USERS_SUCCESS = 'Users get success';


export class GetUsers implements Action {
  readonly type = GET_USERS;

  /**
   *
   * @param {string} payload represents the Firebase collection asked for
   */
  constructor(public payload: string) {
  }
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;

  /**
   *
   * @param {Users} payload represents the answer from the Firebase collection called by GetUsers()
   */
  constructor(public payload: any) {
  }
}


export type All
  = GetUsers
  | GetUsersSuccess;
