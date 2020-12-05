import { GalleriaModule } from 'primeng/galleria';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GalleriaModule
  ],
  exports:[
    GalleriaModule
  ]
})
export class PrimeNgModule { }
