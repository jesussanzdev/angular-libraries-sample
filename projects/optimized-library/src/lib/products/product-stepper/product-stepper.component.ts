import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'optimized-product-stepper',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatButtonModule],
  templateUrl: './product-stepper.component.html',
  styleUrls: ['./product-stepper.component.scss']
})
export class ProductStepperComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}