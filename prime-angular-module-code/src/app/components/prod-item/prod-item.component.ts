import { Component, OnInit } from '@angular/core';
import {IProduct} from './IProduct';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css']
})
export class ProdItemComponent implements OnInit {

  public products:IProduct[] = [
    {
      sno : '01AA02',
      image : 'https://images-na.ssl-images-amazon.com/images/I/61OUIIXnPqL._AC_SX569_.jpg',
      name : 'Samsung Watch',
      price : 1500,
      qty : 2
    },
    {
      sno : '01AA03',
      image : 'https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATADLYN-A9E-BLADLY9399332160E389/1562694814298_0..png?imwidth=320&impolicy=hq',
      name : 'Mi Watch',
      price : 2000,
      qty : 2
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public clickIncrQty(productId){
    this.products = this.products.map(product => {
      if(product.sno === productId){
        return {
          ...product,
          qty : product.qty + 1
        }
      }
      return product
    })
  }

  public clickDecrQty(productId){
    this.products = this.products.map(product => {
      if(product.sno === productId){
        return {
          ...product,
          qty : product.qty - 1 > 0 ? product.qty - 1 : 1
        }
      }
      return product
    })
  }

}
