import { Component } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-product-app';
  latestProduct: Product = { id: 0, name: '',  price: 0, imageURL: '' };

}
