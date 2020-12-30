import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    GalleriaModule,
    ButtonModule,
    CardModule,
    RippleModule,
    DialogModule
  ],
  exports:[
    AccordionModule,
    GalleriaModule,
    ButtonModule,
    CardModule,
    RippleModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
