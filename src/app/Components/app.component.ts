import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Post} from '../Models/post.model';
import * as PostActions from '../Actions/post.actions';

interface AppState {
  post: Post;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post = store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) );
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
