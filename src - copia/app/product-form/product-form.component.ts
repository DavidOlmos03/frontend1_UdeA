import { Component } from '@angular/core';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  idProof: number;
  constructor(private productService: ProductService) {this.idProof = 1;}
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    imageURL: ''
    
  };
  
  onSubmit() {
    this.productService.addProduct(this.product);
    this.product = {
      id: 0,
      name: '',
      price: 0,
      imageURL: ''
    };
  }
  
  //loadImage() {
    //this.product.imageURL = `assets/${this.product.id}.jpg`;
  //}
}

