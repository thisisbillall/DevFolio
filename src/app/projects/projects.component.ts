import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Self Service Portal',
      technologies: 'Ruby on Rails, React Js, Python, PostgreSQL, Github, Docker, JIRA, Postman & MIUI',
      description: [
        'Developed a lightweight version of the main Ordway application, reducing customer support queries by 40%.',
        'Enabled seamless embedding of billing and revenue management via a single-line script with robust authentication to ensure exclusive customer use.',
        'Implemented customizable themes and frame sizes, enhancing user experience and integration flexibility.',
        'Streamlined subscription, invoice, and payment management directly within clients’ web applications, improving customer satisfaction by 35%.',
        'Conceptualized and developed the Self Service Portal, a scaled-down version of the Ordway application.',
        'Implemented customization features allowing users to tailor the portal’s appearance to match their branding and theme.',
        'Enhanced user experience by simplifying subscription management processes and streamlining payment workflows',
      ],
    },
    {
      title: 'TaskMaster',
      technologies: 'Git, Python, Docker, React, PostgreSQL, SQLAlchemy, Netlify, Aiven',
      description: [
        'Developed and launched ”TaskMaster,” a task management application featuring RESTful CRUD operations using FastAPI, ensuring efficient data handling and scalability.',
        'Utilized Docker to containerize both frontend and backend applications, minimizing dependency issues and enabling rapid deployment across environments.',
        'Implemented the frontend using React, leveraging hooks for optimized state management, enhancing user interaction and application responsiveness.',
        'Employed SQLAlchemy classes as an ORM for seamless integration with PostgreSQL in the FastAPI backend, ensuring robust database operations and data integrity.',
        'Deployed the backend on Aiven for secure and scalable database management, while hosting the frontend on Netlify to ensure high availability and global accessibility.',
      ],
    },
    {
      title: 'Anti-Counterfeiting of Products using Blockchain',
      technologies: 'React Js, Solidity, Metamask, Truffle and Ganache, Netlify',
      description: [
        'Implemented Blockchain based solution to counter selling of Fake products at the cost of original ones',
        'This web-app maintains complete record of entities involved in the supply chain and verifies each intermediaries before they update next location.',
        'The aim is to help end customers verify Genuineness of the product by scanning QR code on the product.',
      ],
    },
    {
      title: 'Developer Porfolio',
      technologies: 'Angular, CSS, Netlify',
      description: [
        'Developed a professional portfolio showcasing skills and projects using Angular and CSS. ',
        'Implemented dynamic components and responsive design to ensure a seamless user experience across devices',
        'The portfolio highlights technical expertise and project accomplishments effectively.',
        'Hosted on Netlify utilising Github CI/CD.'
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
