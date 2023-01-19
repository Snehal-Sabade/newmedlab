import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { from } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  isLoggedIn: boolean = true;
  isNewUser: boolean = false;
  @Output() signInSuccess: EventEmitter<Data> = new EventEmitter<Data>();

  constructor(private fb: FormBuilder, private usersService: UsersService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.CreateLogInForm();
  }
  logIn() {
    const mobno = this.logInForm.controls['mobileNo'].value;
    const pass = this.logInForm.controls['password'].value;
    this.usersService.getDataFromServer(`users?mobileNo=${mobno}`).subscribe((data: any) => {
      if (data.length > 0) {
        const user = data[0];
        user['token'] = 'asdfghjkllkk';
        const userToken = 'asdfghjkllkk';
        localStorage.setItem('user', JSON.stringify(user));
        this.signInSuccess.emit()
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