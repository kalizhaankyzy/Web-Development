import { Component, OnInit } from '@angular/core';
import { categories } from '../modules/categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = categories;
  selectedCategoryName:string;
  constructor(
    // private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }
  
  selectCategory(category){
    this.selectedCategoryName = category.name;
    // return this.categoryService.setSelectedCategoryName(category.name);
  }
}
