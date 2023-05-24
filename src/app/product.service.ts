import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
