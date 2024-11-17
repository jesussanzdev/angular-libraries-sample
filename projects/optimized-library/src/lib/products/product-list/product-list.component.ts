import { AfterContentInit, Component, ContentChild, Inject, inject, OnInit, Optional } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductListToken } from './product-list-token';

@Component({
  selector: 'optimized-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterContentInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'description'];
  dataSource: Product[] = [];

  private productService = inject(ProductService);

  @ContentChild(ProductListToken) noProductsMessage: ProductListToken | null = null;

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
