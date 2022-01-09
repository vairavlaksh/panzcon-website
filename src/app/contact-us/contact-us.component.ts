import { Component, OnInit } from '@angular/core';

interface contactUs {
  email: string,
  msg: string
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  contactUs: contactUs;

  constructor() {
    this.contactUs = {
      email: '',
      msg: ''
    }
   }

  ngOnInit(): void {
  }

  submitFormData() {
    console.log(this.contactUs);
  }

}
