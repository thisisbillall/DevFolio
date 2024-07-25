import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'MySQL',
      level: 'Intermediate',
      rating: 75,
    },
   
    {
      name: 'JIRA, Postman, Axios',
      level: 'Expert',
      rating: 90,
    },

    {
      name: 'Mongo DB',
      level: 'Intermediate',
      rating: 70,
    },


    
    {
      name: 'Git & Github',
      level: 'Expert',
      rating: 85,
    },

    {
      name: 'Ruby on Rails',
      level: 'Intermediate',
      rating: 70,
    },

    {
      name: 'React JS',
      level: 'Expert',
      rating: 85,
    },

    {
      name: 'PostgreSQL',
      level: 'Intermediate',
      rating: 70,
    },
   
    {
      name: 'Node JS',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 68,
    },
    {
      name: 'Python',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Machine Learning',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'Docker',
      level: 'Intermediate',
      rating: 65,
    },


  ];
  constructor() { }

  ngOnInit(): void { }
}
