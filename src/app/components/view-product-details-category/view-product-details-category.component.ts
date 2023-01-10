import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopDealService } from 'src/app/core/http/top-deal.service';

@Component({
  selector: 'app-view-product-details-category',
  templateUrl: './view-product-details-category.component.html',
  styleUrls: ['./view-product-details-category.component.scss']
})
export class ViewProductDetailsCategoryComponent implements OnInit {
  topDealByCategory :any;
  category:any;
  constructor(private topDealService: TopDealService,private router:Router) { }

  ngOnInit(): void {
    this.getTopDealByCategory();
  }

  getTopDealByCategory() {
    this.topDealService.getDetailsFromServer('top-deals-by-category').subscribe((response:any)=>{
      if(response && response.length > 0){
      this.topDealByCategory=response;
    }
  })
}

navigateToTopDealProduct(drugCode:string){
  this.router.navigate(['topdealproductdetail',drugCode]);
}



}
