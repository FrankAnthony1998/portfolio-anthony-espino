import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly email = 'skate_lp11@hotmail.com';
  readonly githubUrl = 'https://github.com';
  readonly linkedinUrl = 'https://linkedin.com';
  readonly year = new Date().getFullYear();
}

