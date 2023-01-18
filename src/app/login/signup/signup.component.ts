import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isGetOtp: boolean = false;
  isVerify: boolean = false;
  otpGenerated!: number;
  signUpForm!: FormGroup;
  otpTimer!: number;
  isVerifyOtp: boolean = false;
  sub!: Subscription;

  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
    this.CreateSignUpForm();
  }
  CreateSignUpForm() {
    this.signUpForm = this.fb.group({
      'userName': ['', [Validators.required]],
      'mobailNo': ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      'password': ['', [Validators.required]],
      'isMobailNoVerified': ['false', []]
    })

  }


  getOtp() {
    this.isGetOtp = true;

    this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
    console.log(this.otpGenerated);


    var emmitedNo = interval(1000);
    this.sub = emmitedNo.subscribe((res: any) => {
      this.otpTimer = 60 - res
      // console.log(res);
      if (this.otpTimer == 0)
        this.sub.unsubscribe();
    })
  }

  verifyOtp(otpEntered: any) {
    if (otpEntered == this.otpGenerated) {
      this.isVerifyOtp = true;
      this.isGetOtp = false;
      this.signUpForm.controls['isMobailNoVerified'].setValue(true);
      this.sub.unsubscribe();

    }

  }


  SignUp() {
    if (this.isVerifyOtp) {
      console.log(this.signUpForm.value);
      this.postDataToServer(this.signUpForm.value);
      alert("Sign-Up successful, continue to loggin");
    }

  }

  postDataToServer(data: any) {
    this.usersService.postDataToServer('users', data).subscribe((data: any) => {
      console.log(data);

    })
  }
}
