import { Injectable } from '@angular/core';
import { products } from './modules/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [];
  constructor() {
    this.products = products;
   }

  deleteProduct(id: number){
    return this.products.splice(id,1);
  }
  getProducts(){
    return this.products;
  }
}
