import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Mohammad Bilal'],
    ['DOB', '01/08/2000'],
    ['Work Exp', '1 Year'],
    ['Education', 'Bachelor of Engineering (2023)'],
    ['Interests', 'Singing, Painting & Electronics'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1 year of experience in software industry as a Full Stack Developer.',
    'I am experienced working with different techologies like Ruby on Rails, React Js, Postgres, Node Js, MongoDB, Docker, AWS, Postman, Material UI and Bootstrap.',
    'I am a quick learner and always open to learn new tech, I believe the more I interact with people the more I get to learn this led me start contributing to join Open source communities and particapate in Hackathons.'
  ];

  constructor() { }

  ngOnInit(): void { }
}
