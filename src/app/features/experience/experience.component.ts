import { Component } from '@angular/core';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  readonly items: ExperienceItem[] = [
    {
      company: 'Empresa / Cliente',
      role: 'Desarrollador Full Stack',
      period: '2025 — 2026',
      summary: 'Construcción de productos web con foco en claridad, performance y UI minimalista.',
    },
    {
      company: 'Startup',
      role: 'Frontend Developer',
      period: '2024 — 2025',
      summary: 'Diseño de interfaces funcionales y sistemas de componentes consistentes.',
    },
  ];
}

