import {Component} from '@angular/core';
import {GROUPS} from './mock-groups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Test';
  groups = GROUPS;
}
