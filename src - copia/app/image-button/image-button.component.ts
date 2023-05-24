import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.css']
})

export class ImageButtonComponent {
  displayImage = false;
  @Input() dato: any;                             //SE ESTA MOSTRANDO SIEMPRE 1.png
  imageURL: string = 'assets/0.jpg'; // Ruta a tu imagen en la carpeta de activos
  
  showImage() {
    if(this.displayImage){
      this.displayImage = false
    }else {
      this.displayImage = true;
    }
    
  }
}



