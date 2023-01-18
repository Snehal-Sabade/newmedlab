import { HttpParams } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopDealService } from 'src/app/core/http/top-deal.service';

@Component({
  selector: 'app-topdealproductdetail',
  templateUrl: './topdealproductdetail.component.html',
  styleUrls: ['./topdealproductdetail.component.scss']
})
export class TopdealproductdetailComponent implements OnInit {
  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private topdealservice: TopDealService) { }

  ngOnInit(): void {
    const drugCode = this.activatedRoute.snapshot.paramMap.get('drugCode');
    if (drugCode) {
      this.getproductDetailBydrugCode(drugCode);
    }
  }

  getproductDetailBydrugCode(drugcode: string) {
    const params: HttpParams = new HttpParams().set('drugCode', drugcode);
    this.topdealservice.getDetailsFromServer('top-deals', params).subscribe((response: any) => {
      if (response && response.length > 0) {
        this.productDetails = response[0];
      }
    })

  }

}

