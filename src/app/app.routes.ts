import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductsDetailsComponent } from './views/products-details/products-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'products/:id', component: ProductsDetailsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
