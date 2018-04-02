import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import { AngularFirestore } from 'angularfire2/firestore';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as usersActions from '../Actions/users.actions';
import {Users} from '../Models/users.model';

export type Action = usersActions.All;


@Injectable()
export class UsersEffects {

  constructor(private actions: Actions, private db: AngularFirestore) {
  }

  @Effect()
  GetUsers: Observable<Action> = this.actions.ofType(usersActions.GET_USERS)
    .map((action: usersActions.GetUsers) => action.payload)
    .mergeMap(payload => this.db.collection(payload).valueChanges())
    // TODO: find a way to limit the number of users taken. Don't update the view unless the currently loaded users update
    .map(users => {
      const userObj = {};
      userObj['userList'] = users;
      return new usersActions.GetUsersSuccess(userObj);
    });

}
