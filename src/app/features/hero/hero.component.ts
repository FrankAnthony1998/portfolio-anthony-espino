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
  readonly subtitle = 'Desarrollador Full Stack enfocado en diseño funcional';

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

