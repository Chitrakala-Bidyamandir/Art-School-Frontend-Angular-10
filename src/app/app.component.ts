import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(){ 
  }

  
  ngOnInint(){
  }
  scrolling=(s)=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  // 
  title = 'ChitraKala-Bidyamandir';
}


