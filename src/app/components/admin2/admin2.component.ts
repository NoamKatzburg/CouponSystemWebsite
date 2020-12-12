import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css'],
})
export class Admin2Component implements OnInit {
  public coupons: Coupon[];
  public displayedColumns: string[] = [
    'companyId',
    'categoryId',
    'title',
    'desc',
    'startDate',
    'endDate',
    'amount',
    'price',
    'image',
  ];
  constructor(private couponService: CouponService) {}

  ngOnInit(): void {
    // this.loadCoupons();
  }

  loadCoupons() {
    this.coupons = null;
    this.couponService.getAllCoupons().subscribe(
      (coupons) => {
        setTimeout(() => {
          this.coupons = coupons;
        }, 1500);
      },
      (err) => {
        alert('error: ' + err.message);
        this.coupons = [];
      }
    );
  }
}
