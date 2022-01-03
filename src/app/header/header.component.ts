import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() activeTabNumber = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSetActiveTabNumber(activeTab: number) {
    this.activeTabNumber = activeTab;
  }

}
