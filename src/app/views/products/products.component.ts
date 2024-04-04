import { Category } from './../../models/product.model';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {

  productList: IProduct[] = [];
  productsByCategoryList: IProduct[] = [];
  categoryList: Category[] = [];
  sortOption: string = 'rel';
  activeCategory?: Category = undefined;
  lastCategory?: Category = undefined;

  private _apiService = inject(ApiService);
  private _categoryService = inject(CategoryService);
  
  ngOnInit(): void {
    this.categoryList = Object.values(Category);

    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
      this.lastCategory = this._categoryService.getLastSelectedCategory();
      if(this.lastCategory !== undefined){
        this.activeCategory = this.lastCategory;
      }else{
        this.activeCategory = this.categoryList[0];
      }
      this.selectCategory(this.activeCategory);
    });
  };

  selectCategory(category: Category): void { 
    this.productsByCategoryList = this.productList.filter((product: IProduct) => product.category === category);
    this.activeCategory = category;
    this._categoryService.setLastSelectedCategory(category);
  }

  sortProducts(): void {
    if(this.sortOption === 'rel'){
      this.productsByCategoryList.sort((a: IProduct, b: IProduct) => b.annualSales - a.annualSales);
    }else{
      this.productsByCategoryList.sort((a: IProduct, b: IProduct) => {
        if (this.sortOption === 'asc') {
          return a.price - b.price;
        } else if(this.sortOption === 'desc'){
          return b.price - a.price;
        }else{
          return 0;
        }
      });
    }
  }
}
