import { Component } from '@angular/core';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  readonly items: ExperienceItem[] = [
    {
      company: 'Proyecto Empresarial (TechSoft)',
      role: 'Full Stack Developer',
      period: '2025 — Presente',
      summary: 'Desarrollo y mantenimiento de aplicaciones empresariales utilizando arquitectura cliente-servidor. Implementación de APIs REST con Spring Boot y consumo desde Angular, incluyendo autenticación con JWT y manejo de datos en Oracle.',
      tags: ['Java 8', 'Spring Boot', 'Angular 14', 'TypeScript', 'Oracle', 'REST API', 'JWT']
    },
    {
      company: 'Sistema Web Corporativo',
      role: 'Backend & Frontend Developer',
      period: '2023 — 2025',
      summary: 'Implementación de servicios backend con Spring Boot (JPA, JDBC) y desarrollo de interfaces dinámicas en Angular. Integración con base de datos Oracle, generación de reportes con JasperReports y pruebas de APIs con Postman.',
      tags: ['Spring Data JPA', 'JDBC', 'Angular Material', 'JasperReports', 'Postman', 'Git']
    }
  ];
}