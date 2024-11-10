import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'basic-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'description'];
  dataSource: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.dataSource = products;
    });
  }
}
