import { Component, ContentChild, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NoProductsMessageComponent } from '../no-products-message/no-product-message.component'

@Component({
  selector: 'basic-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'description'];
  dataSource: Product[] = [];

  @ContentChild(NoProductsMessageComponent) noProductsMessage: NoProductsMessageComponent | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.dataSource = products;
      if (this.dataSource.length === 0 && this.noProductsMessage) {
        this.noProductsMessage.showNoProductsMessage();
      }
    });
  }

  ngAfterContentInit(): void {
    if (this.dataSource.length === 0 && this.noProductsMessage) {
      this.noProductsMessage.showNoProductsMessage();
    }
  }
}
