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
  idProof: number = 2;
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
  formData: any;

  submitForm() {
    const previousFormData = { ...this.formData }; // Copia de los datos anteriores
    console.log(this.formData);
    // Verificar si los datos han cambiado
    if (JSON.stringify(previousFormData) !== JSON.stringify(this.formData)) {
      // Realizar acciones adicionales, como enviar los datos al servidor.
    }
  }
  //loadImage() {
    //this.product.imageURL = `assets/${this.product.id}.jpg`;
  //}
}


interface getting_idProof {
  idProof: number;
}
export const getting_id: getting_idProof = {
  idProof: 2
}

