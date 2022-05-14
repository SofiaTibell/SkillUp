import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-overview',
  templateUrl: './teacher-overview.component.html',
  styleUrls: ['./teacher-overview.component.css']
})
export class TeacherOverviewComponent implements OnInit {
  Name1 = 'Judiaks';
  Age1 = 32;
  Education1 = 'University';
  Skills1 = 'Java';

  Name2 = 'Eugene';
  Age2 = 41;
  Education2 = 'University';
  Skills2 = 'C#';

  Name3 = 'Mia';
  Age3 = 25;
  Education3 = 'University';
  Skills3 = 'JavaScript';

  Name4 = 'Felipe';
  Age4 = 35;
  Education4 = 'University';
  Skills4 = 'React';

  constructor() { }

  ngOnInit(): void {
  }

}
