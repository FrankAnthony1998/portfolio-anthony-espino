import { Component } from '@angular/core';

type Project = {
  title: string;
  role: string;
  year: string;
  href?: string;
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    { title: 'Sistema ERP Empresarial', role: 'Full Stack', year: '2026', href: '#' },
    { title: 'API REST', role: 'Frontend', year: '2025', href: '#' },
    { title: 'API & Auth', role: 'Backend', year: '2025', href: '#' },
    { title: 'UI System', role: 'Design + Dev', year: '2024', href: '#' },
  ];
}

