import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Associate Software Engineer',
      company: 'ORDWAY LABS',
      duration: 'Jul 2023 - Jul 2024',
      description: [
        'Worked as a Full Stack Developer to design and implement a real-time application named Self Service Portal.',
        'The goal was to empower users to bypass traditional customer support channels by providing embedded self-access solution to the Ordway application.',
        'Successfully achieved a 40% reduction in customer support requests, enhancing overall customer satisfaction.',
        'Technologies: Ruby on Rails, React Js, Python, PostgreSQL, Github, Docker, JIRA, Postman & MIUI.'

      ],
    },
    {
      role: 'Web Dev Head',
      company: 'FOSS, PICT',
      duration: 'Apr 2022 - Jul 2023',
      description: [
        'Mentored more than 40 studen-developers as a Web Dev Head at an Free and Open Source college club.',
        'Helped students to get handson on various industry and in-house projects.',
        'The task was to spread awareness about open source tools, contributing to it and ensuring smooth development flow.'
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'UPCLOUD TECHNOLOGIES',
      duration: 'Dec 2021 - Apr 2022',
      description: [
        'Designed and implemented a real-time doctor-patient consultancy application during the COVID-19 pandemic.',
        'This initiative aimed to reduce in-clinic appointments by facilitating voice and video consultations.', 
        'I was responsible for designing UI screens based on Figma designs, ensuring a seamless and user-friendly experience.',
        'Technologies: React Js, Redux, MongoDB, BootStrap, Github, JIRA, Postman.'
      ],
    },
    {
      role: 'Project Maintainer',
      company: 'HACKTOBERFEST',
      duration: 'Oct 2021 - Nov 2021',
      description: [
        'Contributed as Developer-Maintainer for HacktoberFest\'21 by DigitalOcean.',
        'I was responsible for reviewing code pull requests, code commits and open issues.',
        'Worked with Frontend team to design mockups and fronten components.',
        'Technologies: React Js, BootStrap, Github.'
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
