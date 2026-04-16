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
  readonly description = 'Desarrollo aplicaciones web conectando frontend y backend con APIs REST, manejo de bases de datos Oracle y seguridad con JWT. Experiencia con Java 8, Angular 14 y entornos empresariales.';

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

