import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() Name: string | undefined;
  @Input() Age: number | undefined;
  @Input() Education: string | undefined;
  @Input() Skills: string | undefined;
  CV: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.CV = "I am competent";
  }

}
