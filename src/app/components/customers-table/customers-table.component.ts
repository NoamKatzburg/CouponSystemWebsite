import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css'],
})
export class CustomersTableComponent implements OnInit {
  public currentRoute: boolean;
  public customers: Customer[] = [
    {
      id: 1,
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      password: 'string',
      coupons: [
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
      ],
    },
    {
      id: 1,
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      password: 'string',
      coupons: [
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
      ],
    },
    {
      id: 1,
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      password: 'string',
      coupons: [
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
      ],
    }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentRoute = this.checkRoute();
  }

  checkRoute(): boolean {
    let r = this.route.root.firstChild.snapshot.routeConfig.path;

    if (r === 'admin' || r === 'company') {
      return true;
    }
    return false;
  }
}
