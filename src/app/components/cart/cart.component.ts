import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productShow:any;
  constructor(private sharedService:SharedService ) { }

  ngOnInit(): void {
   this.productShow=localStorage.getItem('products');
   this.productShow=JSON.parse(this.productShow);
    
    }
    
}
