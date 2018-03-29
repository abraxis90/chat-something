import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {postReducer} from './Reducers/post.reducer';
import {FormsModule} from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {AppComponent} from './Components/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        post: postReducer
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
