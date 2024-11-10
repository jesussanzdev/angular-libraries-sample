import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product A', price: 29.99, description: 'High quality product A' },
    { id: 2, name: 'Product B', price: 19.99, description: 'Reliable product B' },
    { id: 3, name: 'Product C', price: 39.99, description: 'Popular product C' },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
