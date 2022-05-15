import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Name1 = 'Merlin';
  Age1 = 1337;
  Education1 = 'Hogwarts School of Wizardry and Witchcraft ';
  Skills1 = 'Magic';
  imgSrc = '../../assets/img/merlin.png';
  imgAlt = 'Merlins profile picture';
  CV = 'It is long :)';

  constructor() { }

  ngOnInit(): void {
  }

}
