import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from 'optimized-library';
import { ProductStepperComponent } from 'optimized-library';
import { DialogComponent } from 'optimized-library/dialog';
import { NoProductsMessageComponent } from 'optimized-library';

import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent, ProductStepperComponent, NoProductsMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-sample';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
