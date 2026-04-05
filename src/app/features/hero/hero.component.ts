import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  readonly meta = 'PORTAFOLIO 2026';
  readonly signature = '+J / ROSE';
  readonly title = 'ANTHONY ESPINO';
  readonly subtitle = 'Full Stack Developer | Angular, Java, Spring Boot & Oracle';

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

