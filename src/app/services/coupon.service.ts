import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient) { }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("src/assets/json/coupons.json");
  }
  
}
