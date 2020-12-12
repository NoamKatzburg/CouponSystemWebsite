import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css']
})
export class CompaniesTableComponent implements OnInit {
  public currentRoute: boolean;
  public companies: Company[] = [
    {
       id: 1,
       name: "string",
       email: "string",
       password: "string",
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
        }
      ]
    },
    {
      id: 2,
      name: "string",
      email: "string",
      password: "string",
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
       }
     ]
   }
    
    
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
