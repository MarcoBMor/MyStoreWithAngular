import { CurrencyPipe } from '@angular/common';
import { IProduct } from './../../models/product.model';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TruncatePipe } from '../../truncate.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, TruncatePipe],
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
