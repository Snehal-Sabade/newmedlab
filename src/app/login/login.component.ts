import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  isLoggedIn: boolean = true;
  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit() {
    this.CreateLogInForm();
  }
  logIn() {
    const mobno = this.logInForm.controls['mobileNo'].value;
    const pass = this.logInForm.controls['password'].value;
    this.usersService.getDataFromServer(`users?mobileNo=${mobno}`).subscribe((data: any) => {
      console.log(data);
      if (data.length > 0) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  }

  CreateLogInForm() {
    this.logInForm = this.fb.group({
      'password': ['', [Validators.required]],
      'mobileNo': ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
  }
}