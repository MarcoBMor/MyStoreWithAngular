import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Category, IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  categoryList: Category[] = [];
  productsByCategory: { [categoryName: string]: IProduct[] } = {};

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this.categoryList = Object.values(Category);
    this.categoryList.forEach(category => {
      this._apiService.getExamplesCategories(category).subscribe((products: IProduct[]) => {
        this.productsByCategory[category] = products;
      });
    });
  }

  navigate(id: number): void{
    this._router.navigate(['/products', id]);
  }

  goToStore(): void{
    this._router.navigate(['/products']);
  }
}
