import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-coupons-table',
  templateUrl: './coupons-table.component.html',
  styleUrls: ['./coupons-table.component.css'],
})
export class CouponsTableComponent implements OnInit {
  public currentRoute: boolean;
  public coupons: Coupon[] = [
    {
      id: 1,
      companyId: 1,
      categoryId: 1,
      title: 'string',
      desc: 'string',
      startDate: 'string',
      endDate: 'string',
      amount: 1,
      price: 1,
      image: 'string',
    },
    {
      id: 2,
      companyId: 2,
      categoryId: 2,
      title: 'string',
      desc: 'string',
      startDate: 'string',
      endDate: 'string',
      amount: 2,
      price: 2,
      image: 'string',
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentRoute = this.checkRoute();
  }

  checkRoute(): boolean {
    let r = this.route.root.firstChild.snapshot.routeConfig.path;

    if (r ==='admin' || r ==='company') {
      return true;
    }
    return false;
  }
}
