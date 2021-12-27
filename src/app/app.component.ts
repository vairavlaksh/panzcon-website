import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panzcon-web';
  active = 1;

  constructor(
    private pageScrollServ: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) { }

  onScroll(event: HTMLElement, index: number) {
    this.pageScrollServ.scroll({
      scrollTarget: event,
      document: this.document
    });

    this.active = index;
  }
}
