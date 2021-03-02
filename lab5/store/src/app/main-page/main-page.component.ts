import { Component, OnInit } from '@angular/core';
import { products } from '../modules/products';
import { trigger, transition, animate, style , state, query, group } from '@angular/animations'
import { categories } from '../modules/categories';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [trigger('slideAnimation', [
    state("void", style({ opacity: 0 })),
    transition("void <=> *", [animate("0.5s ease-in-out")])
  ])]
})
export class MainPageComponent implements OnInit {
  allProducts = products;
  categories = categories;
  constructor() { }

  ngOnInit(): void {
  }
  counter = 0;
  slideItems = [
    { src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg', title: 'Title 1' },
    { src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg', title: 'Title 2' },
    { src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg', title: 'Title 3' },
    { src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg', title: 'Title4'},
    { src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg', title: 'Title5'}
  ];

  showNextImage() {
    if (this.counter < this.slideItems.length -1) {
      this.counter += 1;
    }else{
      this.counter=0;
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }else{
      this.counter=this.slideItems.length-1;
    }
  }

  
}
