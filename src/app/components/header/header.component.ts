import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
cartCount!:Observable<number>

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.cartCount= this.sharedService.cartObs;
  }

}
