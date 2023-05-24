import { Component, Input } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  @Input() product: Product | undefined;
}

