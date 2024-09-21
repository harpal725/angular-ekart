import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Stive', 'Ali', 'Hiader', 'Asim'];

  searchtext: string = '';

  @ViewChild(ProductListComponent) productListcomponent: ProductListComponent;

  SetText(value: string) {
    this.searchtext = value;
  }
}
