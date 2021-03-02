import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }

  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  deleteItem(id:number){
    this.items = this.items.filter((item,i)=> i !== id);
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
}
