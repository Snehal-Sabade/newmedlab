import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount!: Observable<number>
  isLoggedIn: boolean = false;
  userLoggedIn: boolean= false;;
  user:any;
  actionName:string="LogIn";
  @ViewChild('loginBtn', { 'read': ElementRef }) loginBtn!: ElementRef;
  @ViewChild('closeBtn', { 'read': ElementRef }) closeBtn!: ElementRef;
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.cartCount = this.sharedService.cartObs;
  }

  changeAction(action:string) {
    // this.isLoggedIn = !this.isLoggedIn;
    this.actionName = action;

  }

  handleLoginSuccess(flag:boolean){
if(flag){
  this.closeBtn.nativeElement.click();
}
  }
  reDirectToCart() {
    if (this.isLoggedIn && this.userLoggedIn) {
      this.router.navigate(['/cart'])
    } else {
      this.loginBtn.nativeElement.click();
    }

  }
  onLogin(): void {
    this.closeBtn.nativeElement.click();
    this.userLoggedIn = true;
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log(this.user);
  }

}
