import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly email = 'skate_lp11@hotmail.com';
  //readonly githubUrl = 'https://github.com/FrankAnthony1998';
  readonly linkedinUrl = 'https://www.linkedin.com/in/anthony-espino-a87654299/';
  readonly whatsappUrl = 'https://wa.me/51910203951?text=Hola%20Anthony,%20vi%20tu%20portfolio%20y%20me%20interesa%20crear%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.%20%C2%BFPodemos%20conversar%3F';
  readonly year = new Date().getFullYear();
}

