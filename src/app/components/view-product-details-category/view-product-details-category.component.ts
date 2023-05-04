import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopDealService } from 'src/app/core/http/top-deal.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-view-product-details-category',
  templateUrl: './view-product-details-category.component.html',
  styleUrls: ['./view-product-details-category.component.scss']
})
export class ViewProductDetailsCategoryComponent implements OnInit {
  topDealByCategory: any;
  category: any;
  constructor(private topDealService: TopDealService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getTopDealByCategory();
  }

  getTopDealByCategory() {
    this.topDealService.getDetailsFromServer('top-deals-by-category').subscribe((response: any) => {
      if (response && response.length > 0) {
        this.topDealByCategory = response;
      }
    })
  }

  navigateToTopDealProduct(drugCode: string) {
    this.router.navigate(['topdealproductdetail', drugCode]);
  }

  onAddToCart(event:any,product: any) {
    event.stopPropagation();
    var products: any;
    products = localStorage.getItem('products');
    products = JSON.parse(products);
    if (!products) {
      products = [];
    }

    const abc = products.find((prod:any) => prod.drugCode == product.drugCode)
    if (abc == undefined){
      products.push(product)
    }else{
      alert('Alrady in cart');
    }
    localStorage.setItem('products', JSON.stringify(products));
    this.sharedService.emitSelProduct.next(products.length);

  }

}
