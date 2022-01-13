import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {

  enquiryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  });
  formSubmitSuccess = false;


  constructor(private http: HttpClient) {}


  submitFormData() {
    const enquiryData = this.enquiryForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(
      'https://formspree.io/f/mvolzgbr',
      { replyto: enquiryData.email, message: enquiryData.message },
      {headers: headers}
    ).subscribe(
      response => {
        this.formSubmitSuccess = true;
      }
    );
  }

}
