import { Component, OnInit } from '@angular/core';
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
  constructor(private sharedService: SharedService,private router:Router) { }

  ngOnInit(): void {
    this.cartCount = this.sharedService.cartObs;
  }

  changeAction() {
    this.isLoggedIn = !this.isLoggedIn;
    
  }
}
