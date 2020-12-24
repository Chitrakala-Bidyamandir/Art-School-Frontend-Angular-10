import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';
import { CardComponent } from '../card/card.component';
import { AboutGroupComponent } from '../about-group/about-group.component';
import { EventBannerComponent } from '../event-banner/event-banner.component';



@NgModule({
  declarations: [FooterComponent, SliderComponent, CardComponent, AboutGroupComponent, EventBannerComponent],
  imports: [
    CommonModule,
    PrimeNgModule
 ],
  exports:[
    FooterComponent,
    SliderComponent,
    CardComponent,
    AboutGroupComponent,
    EventBannerComponent
  ]
})
export class SharedModuleModule { }
