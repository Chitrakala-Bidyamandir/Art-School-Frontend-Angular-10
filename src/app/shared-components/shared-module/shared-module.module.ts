import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';
import { CardComponent } from '../card/card.component';



@NgModule({
  declarations: [FooterComponent, SliderComponent, CardComponent],
  imports: [
    CommonModule,
    PrimeNgModule
 ],
  exports:[
    FooterComponent,
    SliderComponent,
    CardComponent
  ]
})
export class SharedModuleModule { }
