import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  text = 'Text';
  imgSrc = '';
  imgAlt = 'Alternative text';

  constructor() { }

  ngOnInit(): void {
    this.text = "Hello";
    this.imgSrc = "img source";
    this.imgAlt = "This is our image";
  }

}
