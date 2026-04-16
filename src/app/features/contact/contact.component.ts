import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly email = 'skate_lp11@hotmail.com';
  readonly githubUrl = 'https://github.com/FrankAnthony1998';
  readonly linkedinUrl = 'https://www.linkedin.com/in/anthony-espino-a87654299/';
  readonly year = new Date().getFullYear();
}

