import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';

import {User} from '../Models/users.model';
import * as usersActions from '../Actions/users.actions';

interface AppState {
  users: Array<any>;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$: any;

  constructor(private store: Store<AppState>, db: AngularFirestore) {
    this.users$ = this.store.select('users');
  }

  getUsers() {
    this.store.dispatch(new usersActions.GetUsers('Users'));
  }

  ngOnInit() {
    this.getUsers();
  }
}

