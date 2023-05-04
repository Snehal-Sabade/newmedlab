import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TopDealService } from 'src/app/core/http/top-deal.service'
@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {
  pincode!: number;
  isPinCodeAvailable: boolean = true;
  pincodeInfo: any;

  @ViewChild('closeBtn', { read: ElementRef }) closeBtn!: ElementRef
  constructor(private topDealService: TopDealService) { }

  ngOnInit(): void {
  }

  getPackageDetailsbyPincode() {
    if (this.pincode && this.pincode.toString().length == 6) {
      const httpParams: HttpParams = new HttpParams()
        .set('pincode', this.pincode)
      this.topDealService.getDetailsFromServer('pincodeDetails', httpParams).subscribe((Response: any) => {
        if (Response && Response.length > 0) {
          this.isPinCodeAvailable = true;
          this.pincodeInfo = Response[0];

          if (this.closeBtn) {
            this.closeBtn.nativeElement.click();
          }

        } else {
          this.isPinCodeAvailable = false;
        }
      },
        error => {
          console.log(error);
        })
    }

  }

}
export interface Pincode {
  isAvailable: boolean;
  pincode: number;
  packegeDetails: any;
  pinCodeCity: string;
  statusCode: number;

}