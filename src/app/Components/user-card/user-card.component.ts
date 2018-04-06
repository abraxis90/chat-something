import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../Models/users.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  styleTranslateModel: any;

  constructor() {
  }

  ngOnInit() {
    this.styleTranslateModel = {'transform': 'translate(' + 0 + 'px, ' + 0 + 'px)'};
  }

  handleDrag(event) {
    let xPos = event.deltaX;
    let yPos = event.deltaY;
    console.log(event);
    this.styleTranslateModel = {'transform': 'translate(' + xPos + 'px, ' + yPos + 'px)'};
  }

}
