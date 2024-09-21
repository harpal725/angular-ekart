import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productlistComp: ProductListComponent = undefined;

  product: Product;

  ngOnInit() {
    this.product = this.productlistComp.selectedProduct;
  }
}
