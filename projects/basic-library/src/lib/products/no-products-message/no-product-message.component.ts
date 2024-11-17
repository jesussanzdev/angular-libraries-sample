import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'basic-no-products-message',
  standalone: true,
  imports: [CommonModule],
  template: `<p>No products available.</p>`
})
export class NoProductsMessageComponent {
  showNoProductsMessage(): void {
    console.log('No products available.');
  }
}