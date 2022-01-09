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
  activeTab: number;
  screenWidth: number;
  scrollEvent: any;
  sectionThreshold: any;
  topPositionValues: number[] = [0, 0, 0, 0, 0, 0];

  constructor(
    private elRef: ElementRef,
  ) {
    this.screenWidth = (window.innerHeight);
    this.sectionThreshold = this.screenWidth * 0.5;
    this.activeTab = Math.trunc((this.screenWidth - 10)/ this.screenWidth) + 1;
  }

  ngOnInit() {
    this.scrollEvent = fromEvent(window, 'scroll').pipe(
      debounceTime(50)).subscribe(() => this.onWindowScroll())
  }

  onWindowScroll() {
    // - 80 corresponds to 80px from top of screen
    this.topPositionValues[0] = Math.trunc(
      this.elRef.nativeElement.querySelector('#home').getBoundingClientRect().top - this.sectionThreshold);
    this.topPositionValues[1] = Math.trunc(
      this.elRef.nativeElement.querySelector('#services').getBoundingClientRect().top - this.sectionThreshold);
    this.topPositionValues[2] = Math.trunc(
      this.elRef.nativeElement.querySelector('#products').getBoundingClientRect().top - this.sectionThreshold);
    this.topPositionValues[3] = Math.trunc(
      this.elRef.nativeElement.querySelector('#about-us').getBoundingClientRect().top - this.sectionThreshold);
    this.topPositionValues[4] = Math.trunc(
      this.elRef.nativeElement.querySelector('#contact-us').getBoundingClientRect().top - this.sectionThreshold);

    const tabNumber = this.topPositionValues.find((value, index) => {
      console.log((this.topPositionValues[index + 1]))
      if (((value) < 0) && (this.topPositionValues[index + 1]) > 0 ) {
        this.activeTab = index + 1;
        return true;
      } else if (value >= 0 && (this.topPositionValues[index + 1]) > 0) {
        this.activeTab = 1;
        return true;
      }
      else {
        return false;
      }
    });

    this.activeTab = tabNumber ? this.activeTab : 5;

    console.log(this.topPositionValues);
    // this.activeTab = window.scrollY
    //   ? Math.trunc((window.scrollY + window.scrollY * 0.1) / this.screenWidth) + 1
    //   : 1;
  }

  ngOnDestroy() {
    this.scrollEvent.unsubscribe();
  }
}
