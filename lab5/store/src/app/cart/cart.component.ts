import { Component, OnInit } from '@angular/core';
import {CartService} from './../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  deleteItem(id:number){
    this.items = this.cartService.deleteItem(id);
    window.alert('Your product has been removed from the cart!');
  }
  clearAll(){
    this.items = this.cartService.clearCart();
    window.alert('All products have been removed from the cart!');
  }
}
