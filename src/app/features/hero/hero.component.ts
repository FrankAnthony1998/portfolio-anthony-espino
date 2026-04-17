import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {

  readonly title = 'ANTHONY ESPINO';
  // readonly subtitle = 'Full Stack Developer | Angular, Java, Spring Boot & Oracle';
  readonly description =
    'Desarrollo aplicaciones web conectando frontend y backend con APIs REST, manejo de bases de datos Oracle y seguridad con JWT. Experiencia con Java, Angular y entornos empresariales.';

  typedTitle = '';
  private index = 0;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    const speed = 80;

    const typing = setInterval(() => {
      if (this.index < this.title.length) {
        this.typedTitle += this.title.charAt(this.index);
        this.index++;
      } else {
        clearInterval(typing);
      }
    }, speed);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}