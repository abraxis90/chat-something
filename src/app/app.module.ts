import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {FormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {UsersEffects} from './Effects/users.effects';
import {usersReducer} from './Reducers/users.reducer';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import {AppComponent} from './Containers/app.component';
import {UserCardComponent} from './Components/user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    EffectsModule.forRoot([UsersEffects]),
    StoreModule.forRoot(
      {
        users: usersReducer
      }),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
