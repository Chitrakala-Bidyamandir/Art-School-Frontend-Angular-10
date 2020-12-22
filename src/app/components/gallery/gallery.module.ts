import { PrimeNgModule } from './../../shared-components/prime-ng/prime-ng.module';
import { SharedModuleModule } from './../../shared-components/shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModuleModule,
    PrimeNgModule
  ]
})
export class GalleryModule { }
