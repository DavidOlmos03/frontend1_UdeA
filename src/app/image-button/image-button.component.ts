import { Component, Input } from '@angular/core';
import { getting_id } from '../product-form/product-form.component';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.css']
})

export class ImageButtonComponent {
  
  //dato: number = 0;
  @Input() dato: any; 
  displayImage = false;
                              //SE ESTA MOSTRANDO SIEMPRE 1.png
  //imageURL: string = f'assets/{}.jpg'; // Ruta a tu imagen en la carpeta de activos
  imageURL: string = 'assets/'+ getting_id.idProof+'.jpg';
  showImage() {
    if(this.displayImage){
      this.displayImage = false
    }else {
      this.displayImage = true;
    }
    
  }
}
//OBS. Se esta haciendo la importacion a la componente desde el html
//Falta probar como obtener ese id (en product-fom.component.ts) si con algun getting o de alguna otra manera


