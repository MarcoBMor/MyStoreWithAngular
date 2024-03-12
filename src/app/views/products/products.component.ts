import { Category } from './../../models/product.model';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { CardComponent } from '../card/card.component';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {

  productList: IProduct[] = [];
  productsByCategoryList: IProduct[] = [];
  categoryList: Category[] = [];

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
}
