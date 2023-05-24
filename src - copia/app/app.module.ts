import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ImageButtonComponent } from './image-button/image-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductViewComponent,
    ImageButtonComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
