import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public cards: any[] = [
    {
      "URL":"assets/images/pic1.jpg",
      "Caption":"image1"
    },
    {
      "URL":"assets/images/pic2.jpg",
      "Caption":"image2"
    },
    {
      "URL":"assets/images/pic3.jpg",
      "Caption":"image3"
    },
    {
      "URL":"assets/images/pic4.jpg",
      "Caption":"image4"
    },
    {
      "URL":"assets/images/pic5.jpg",
      "Caption":"image5"
    },
    {
      "URL":"assets/images/pic6.jpg",
      "Caption":"image6"
    }
];
  

  constructor(
    private primengConfig: PrimeNGConfig
  ) 
  { 
      
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("slide change");
  }

}
