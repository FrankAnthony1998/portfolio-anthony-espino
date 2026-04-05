import { Component } from '@angular/core';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[]; // <--- Nuevo campo para el stack
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  readonly items: ExperienceItem[] = [
    {
      company: 'Tu Empresa Actual',
      role: 'Senior Developer',
      period: '2025 — Presente',
      summary: 'Lideré la migración a una arquitectura de micro-frontends que mejoró el tiempo de carga en un 40%.',
      tags: ['Angular', 'Spring Boot', 'AWS']
    },
    {
      company: 'Startup Tecnológica',
      role: 'Frontend Developer',
      period: '2024 — 2025',
      summary: 'Desarrollé interfaces core para la plataforma principal, logrando un aumento del 15% en la retención de usuarios.',
      tags: ['TypeScript', 'Tailwind', 'Figma']
    },
  ];
}