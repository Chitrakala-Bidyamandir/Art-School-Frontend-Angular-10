import { PrimeNGConfig } from 'primeng/api';
import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(
    public updates: SwUpdate,
    private primengConfig: PrimeNGConfig
  ){ 
    this.updates.available.subscribe(e => {  });
  }

  
  ngOnInint(){

    this.primengConfig.ripple = true;

  }
  title = 'ChitraKala-Bidyamandir';
  displayMaximizable: boolean;
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  scrolling=(s)=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  // 
}


