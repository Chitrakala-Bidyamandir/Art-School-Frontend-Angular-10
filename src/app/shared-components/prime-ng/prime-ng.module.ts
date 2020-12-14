import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    GalleriaModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
