import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    CardModule,
    DialogModule
  ],
  exports:[
    GalleriaModule,
    ButtonModule,
    CardModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
