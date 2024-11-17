import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListToken } from '../product-list/product-list-token';

@Component({
  selector: 'optimized-no-products-message',
  standalone: true,
  imports: [CommonModule],
  template: `<p>No products available.</p>`,
  providers: [
    { provide: ProductListToken, useExisting: NoProductsMessageComponent }
  ]
})
export class NoProductsMessageComponent extends ProductListToken {
  showNoProductsMessage(): void {
    console.log('No products available.');
  }
}