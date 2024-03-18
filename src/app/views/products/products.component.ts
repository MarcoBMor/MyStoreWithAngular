import { Category } from './../../models/product.model';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { CardComponent } from '../card/card.component';
import { forkJoin, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

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

  private _apiService = inject(ApiService);
  
  ngOnInit(): void {
    forkJoin([this._apiService.getCategories(), this._apiService.getProducts()]).subscribe((data: [Category[], IProduct[]]) => {
      this.categoryList = data[0];
      this.productList = data[1];
      this.selectCategory(this.categoryList[0]);
    });
  };

  selectCategory(category: Category): void { 
    this.productsByCategoryList = this.productList.filter((product: IProduct) => product.category === category);
  }

  sortProducts(): void {
    if(this.sortOption === 'rel'){
      this.productsByCategoryList.sort((a: IProduct, b: IProduct) => a.id - b.id);
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
