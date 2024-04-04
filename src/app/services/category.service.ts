import { Injectable } from '@angular/core';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  lastSelectedCategory!: Category;
  
  constructor() { }

  setLastSelectedCategory(category: Category): void {
    this.lastSelectedCategory = category;
  }

  getLastSelectedCategory(): Category {
    return this.lastSelectedCategory;
  }

}
