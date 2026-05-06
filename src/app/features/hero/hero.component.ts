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
    'Desarrollador web enfocado en la creación de landing pages, sitios web y e-commerce optimizados para rendimiento, experiencia de usuario y conversión. Construyo soluciones modernas, rápidas y pensadas para ayudar a negocios a conseguir resultados online.';

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