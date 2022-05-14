import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      name: [''],
      age: [''],
      education: [''],
      skills: [''],
      roles: [''],
      experties: [''],
      email: [''],
      password: ['']
    });
  }

  onLoginClick(): void {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
