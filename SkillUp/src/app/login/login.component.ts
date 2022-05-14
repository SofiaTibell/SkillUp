import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  signInForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
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
