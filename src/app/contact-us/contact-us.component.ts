import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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

  matcher = new MyErrorStateMatcher();


  constructor(private http: HttpClient) {}

  submitFormData() {
    const enquiryData = this.enquiryForm.value;
    console.log('data', enquiryData);
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

  get email() { return this.enquiryForm.get('email'); }

}
