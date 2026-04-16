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
    { title: 'DEMO E-COMMERCE', role: 'Full Stack', year: '2026', href: 'https://demo-ecommerce-next.netlify.app/' },
    { title: 'API REST', role: 'Frontend', year: '2025', href: '' },
    { title: 'Proximamente...', role: 'Proximamente...', year: '2025', href: '' },
    { title: 'Proximamente...', role: 'Proximamente...', year: '2024', href: '' },
  ];
}

