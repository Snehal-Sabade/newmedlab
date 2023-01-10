import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TopDealService } from '../core/http/top-deal.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {
  products: any[]=[];
 
  constructor(private topDealService: TopDealService,private router:Router) { }

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

  navigateToTopDealProduct(drugCode:string){
    this.router.navigate(['topdealproductdetail',drugCode]);
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

  // topdeals=[
  //       {
  //         "drugCode": 381015,
  //         "actualPrice": 4,
  //         "maxQuantity": 60,
  //         "discountPrice": 4,
  //         "description": "ELECTRAL POWDER 4.4GM",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "SACHET",
  //         "isActive": 1,
  //         "descriptionString": "4.4g Oral Powder in Sachet",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/381015.jpg"
  //         ],
  //         "composition": "ANHYDROUS DEXTROSE(2.7 GM)+POTASSIUM CHLORIDE(0.3 GM)+SODIUM CHLORIDE(0.52 GM)+SODIUM CITRATE(0.58 GM)",
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "FDC LIMITED",
  //         "medicineCategory": "Basic Health Essentials",
  //         "medicineTag": [
  //           "top_3_deals",
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "ELECTRAL POWDER 4.4GM",
  //         "drugForm": "ORAL POWDER",
  //         "searchable": 1,
  //         "medicineName": "ELECTRAL",
  //         "schedule": "O",
  //         "size": 1,
  //         "rxRequired": false,
  //         "name": "ELECTRAL POWDER 4.4GM",
  //         "adjudicationFlag": 0,
  //         "categoryId": 10,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 10014260,
  //         "actualPrice": 50,
  //         "maxQuantity": 10,
  //         "discountPrice": 50,
  //         "description": "HIMALAYA NEEM & TURMERIC SOAP 125GM",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "BOX",
  //         "isActive": 1,
  //         "descriptionString": "",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/10014260.jpg"
  //         ],
  //         "composition": "nan",
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "THE HIMALAYA DRUG COMPANY",
  //         "medicineCategory": "Hair and Skin Care",
  //         "medicineTag": [
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": false,
  //         "genericDosage": "HIMALAYA NEEM & TURMERIC SOAP 125GM",
  //         "drugForm": "SOAP",
  //         "searchable": 1,
  //         "medicineName": "HIMALAYA NEEM",
  //         "schedule": "C",
  //         "size": 1,
  //         "rxRequired": false,
  //         "name": "HIMALAYA NEEM & TURMERIC SOAP 125GM",
  //         "adjudicationFlag": 0,
  //         "categoryId": 9,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 1000050509,
  //         "actualPrice": 61,
  //         "maxQuantity": 5,
  //         "discountPrice": 61,
  //         "description": "Dettol Antiseptic Liquid Bottle Of 125 Ml",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "BOTTLE",
  //         "isActive": 1,
  //         "descriptionString": "",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/1000050509.jpg"
  //         ],
  //         "composition": "ANTISEPTIC",
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "RECKITT BENCKISER",
  //         "medicineCategory": "Home Hygiene",
  //         "medicineTag": [
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "DETTOL ANTISEPTIC LIQUID BOTTLE OF 125 ML",
  //         "drugForm": "LIQUID",
  //         "searchable": 1,
  //         "medicineName": "DETTOL ANTISEPTIC",
  //         "schedule": "O",
  //         "size": 125,
  //         "rxRequired": false,
  //         "name": "DETTOL ANTISEPTIC LIQUID BOTTLE OF 125 ML",
  //         "adjudicationFlag": 0,
  //         "categoryId": 4,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 10232784,
  //         "actualPrice": 32,
  //         "maxQuantity": 20,
  //         "discountPrice": 32,
  //         "description": "Whisper Choice Wings Sanitary Pads Regular-7 Pads",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "PACKET",
  //         "isActive": 1,
  //         "descriptionString": "",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/10232784.jpg"
  //         ],
  //         "composition": "nan",
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "Procter and Gamble",
  //         "medicineCategory": "Women Care",
  //         "medicineTag": [
  //           "top_3_deals",
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "WHISPER CHOICE WINGS 7",
  //         "drugForm": "PAD",
  //         "searchable": 1,
  //         "medicineName": "WHISPER",
  //         "schedule": "O",
  //         "size": 0,
  //         "rxRequired": false,
  //         "name": "WHISPER CHOICE WINGS 7",
  //         "adjudicationFlag": 0,
  //         "categoryId": 13,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 1000054657,
  //         "actualPrice": 9,
  //         "maxQuantity": 10,
  //         "discountPrice": 9,
  //         "description": "ENO LEMON SACHETS 5GM",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "Packet",
  //         "isActive": 1,
  //         "descriptionString": "O",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/1000054657.jpg"
  //         ],
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "",
  //         "medicineCategory": "Basic Health Essentials",
  //         "medicineTag": [
  //           "top_3_deals",
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "ENO LEMON SACHETS 5GM",
  //         "searchable": 1,
  //         "schedule": "O",
  //         "size": 10,
  //         "rxRequired": false,
  //         "name": "ENO LEMON SACHETS 5GM",
  //         "adjudicationFlag": 0,
  //         "categoryId": 10,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 10220151,
  //         "actualPrice": 36,
  //         "maxQuantity": 20,
  //         "discountPrice": 36,
  //         "description": "Whisper Choice Ultra Sanitary Pads- Extra Large (6 pads)",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "PACK",
  //         "isActive": 1,
  //         "descriptionString": "",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/10220151.jpg"
  //         ],
  //         "composition": "nan",
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "Procter and Gamble",
  //         "medicineCategory": "Women Care",
  //         "medicineTag": [
  //           "top_3_deals",
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "AMRUTANJAN COMFY ULTRA XL  SANITARY PADS  PACKET OF 6",
  //         "drugForm": "SANITARY PAD",
  //         "searchable": 1,
  //         "medicineName": "AMRUTANJAN COMFY SNUG FIT",
  //         "schedule": "O",
  //         "size": 0,
  //         "rxRequired": false,
  //         "name": "AMRUTANJAN COMFY ULTRA XL  SANITARY PADS  PACKET OF 6",
  //         "adjudicationFlag": 0,
  //         "categoryId": 13,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 1000054665,
  //         "actualPrice": 9,
  //         "maxQuantity": 10,
  //         "discountPrice": 9,
  //         "description": "ENO ORANGE POWDER 5GM",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "Packet",
  //         "isActive": 1,
  //         "descriptionString": "O",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/1000054665.jpg"
  //         ],
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "",
  //         "medicineCategory": "Basic Health Essentials",
  //         "medicineTag": [
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "ENO ORANGE POWDER 5GM",
  //         "searchable": 1,
  //         "schedule": "O",
  //         "size": 10,
  //         "rxRequired": false,
  //         "name": "ENO ORANGE POWDER 5GM",
  //         "adjudicationFlag": 0,
  //         "categoryId": 10,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 1000054562,
  //         "actualPrice": 330,
  //         "maxQuantity": 10,
  //         "discountPrice": 330,
  //         "description": "Whisper Ultra Clean Sanitary Pads For Women XL+ 30 Free Whisper Ultra Night XXL+ 2 Napkins",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "Packet",
  //         "isActive": 1,
  //         "descriptionString": "O",
  //         "discountPercentage": 0,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/1000054562.jpg"
  //         ],
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "Procter and Gamble",
  //         "medicineCategory": "Dental Care",
  //         "medicineTag": [
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "Whisper Ultra Clean Sanitary Pads For Women XL+ 30 Free Whisper Ultra Night XXL+ 2 Napkins",
  //         "searchable": 1,
  //         "schedule": "O",
  //         "size": 0,
  //         "rxRequired": false,
  //         "name": "Whisper Ultra Clean Sanitary Pads For Women XL+ 30 Free Whisper Ultra Night XXL+ 2 Napkins",
  //         "adjudicationFlag": 0,
  //         "categoryId": 13,
  //         "discountPercentageText": "0%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       },
  //       {
  //         "drugCode": 1000054607,
  //         "actualPrice": 3499,
  //         "maxQuantity": 10,
  //         "discountPrice": 3149,
  //         "description": "Bigflex Essential whey Protein (Chocolate Truffle) - Pouch ( 1Kg )",
  //         "availability": "AVAILABLE",
  //         "source": "skuMaster",
  //         "type": "Packet",
  //         "isActive": 1,
  //         "descriptionString": "O",
  //         "discountPercentage": 10,
  //         "productImageSlug": [
  //           "https://mb-meds-assets.medibuddy.in/medicineImages/1000054607.jpg"
  //         ],
  //         "medicineType": "OTC_STORE",
  //         "userLimit": 5,
  //         "brand": "Bigflex",
  //         "medicineCategory": "Health Supplements",
  //         "medicineTag": [
  //           "top_8_deals"
  //         ],
  //         "productDetailSlug": "[]",
  //         "isOtc": true,
  //         "genericDosage": "Bigflex Essential whey Protein (Chocolate Truffle) - Pouch ( 1Kg )",
  //         "searchable": 1,
  //         "schedule": "O",
  //         "size": 0,
  //         "rxRequired": false,
  //         "name": "Bigflex Essential whey Protein (Chocolate Truffle) - Pouch ( 1Kg )",
  //         "adjudicationFlag": 0,
  //         "categoryId": 16,
  //         "discountPercentageText": "10%",
  //         "showAdjudicationFlag": false,
  //         "adjudicationText": ""
  //       }
  //     ]

}
