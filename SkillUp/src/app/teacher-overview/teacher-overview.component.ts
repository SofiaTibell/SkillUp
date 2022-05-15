import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-overview',
  templateUrl: './teacher-overview.component.html',
  styleUrls: ['./teacher-overview.component.css']
})
export class TeacherOverviewComponent implements OnInit {
  Name1 = 'Merlin';
  Age1 = 32;
  Education1 = 'University';
  Skills1 = 'Java';
  imgSrc = '../../assets/img/merlin.png';

  Name2 = 'Eugene';
  Age2 = 41;
  Education2 = 'University';
  Skills2 = 'C#';
  imgSrc2 = '../../assets/img/image1.png';

  Name3 = 'Mia';
  Age3 = 25;
  Education3 = 'University';
  Skills3 = 'JavaScript';
  imgSrc3 = '../../assets/img/image2.png';

  Name4 = 'Felipe';
  Age4 = 35;
  Education4 = 'University';
  Skills4 = 'React';
  imgSrc4 = '../../assets/img/image4.png';

  imgAlt = 'Merlins profile picture';
  CV = '';

  constructor() { }

  ngOnInit(): void {
  }

}
