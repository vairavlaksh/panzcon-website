import { Component, ElementRef} from '@angular/core';
import {fromEvent} from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'panzcon-web';

  constructor() {}

}
