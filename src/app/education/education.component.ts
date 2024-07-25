import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Pune Institute of Computer Technology, Pune",
      course: 'Bachelor of IT Engineering',
      duration: '2020-2023',
      grade: '9.5',
    },
    {
      institute: 'Manav School of Engineering, Akola',
      course: 'Diploma in Computer Science Engineering',
      duration: '2017-2020',
      grade: '93%',
    },
    {
      institute: 'Modern English School',
      course: 'SSC',
      duration: '2016-2017',
      grade: '86.80%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
