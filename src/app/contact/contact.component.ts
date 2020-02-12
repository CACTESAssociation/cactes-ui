import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const email = `First name: ${this.firstName}\nLast name: ${this.lastName}` // Send to backend
  }

}
