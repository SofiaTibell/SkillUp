import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-profile',
  templateUrl: './dummy-profile.component.html',
  styleUrls: ['./dummy-profile.component.css']
})
export class DummyProfileComponent implements OnInit {
  Name1 = 'Merlin';
  Age1 = 1337;
  Education1 = 'Hogwarts School of Wizardry and Witchcraft ';
  Skills1 = 'Magic';
  imgSrc = '../../assets/img/merlin.png';
  imgAlt = 'Merlins profile picture';
  CV = '';

  constructor() { }

  ngOnInit(): void {
  }

}
