<<<<<<< HEAD
import { IProduct } from './../../models/product.model';
import { ProductsComponent } from './../products/products.component';
=======
import { CurrencyPipe } from '@angular/common';
import { IProduct } from './../../models/product.model';
>>>>>>> 49626a7 (Add Sort & Change css of product details)
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
<<<<<<< HEAD
  imports: [],
=======
  imports: [CurrencyPipe],
>>>>>>> 49626a7 (Add Sort & Change css of product details)
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {

  private _router = inject(Router);

  @Input() product?: IProduct;
  
  navigate(id?: number): void{
    this._router.navigate(['/products', id]);
  }

}
