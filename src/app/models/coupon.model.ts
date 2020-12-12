export class Coupon {
  constructor(
    public id: number,
    public companyId: number,
    public categoryId: number,
    public title: string,
    public desc: string,
    public startDate: string,
    public endDate: string,
    public amount: number,
    public price: number,
    public image: string
  ) {}
}
