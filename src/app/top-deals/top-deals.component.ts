import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TopDealService } from '../core/http/top-deal.service';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {
  products: any[] = [];

  constructor(private topDealService: TopDealService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getTopDeals();
  }

  getTopDeals() {
    this.topDealService.getDetailsFromServer('top-deals').subscribe((response: any) => {
      if (response && response.length > 0) {
        this.products = response;
      }
    })
  }

  navigateToTopDealProduct(drugCode: string) {
    this.router.navigate(['topdealproductdetail', drugCode]);
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,

  };

  addToCart(product: any) {
    var products: any;
    products = localStorage.getItem('products');
    products = JSON.parse(products);
    if (!products) {
      products = [];
    }

    let isDuplcate = false;
    products.forEach((element: any) => {
      if (element.drugCode = product.drugCode) {
        isDuplcate = true;
      }
    });
    if (isDuplcate) {
      alert('Alrady in cart');
    } else {
      products.push(product);
    }
    localStorage.setItem('products', JSON.stringify(products));
    this.sharedService.emitSelProduct.next(products.length);

  }

}