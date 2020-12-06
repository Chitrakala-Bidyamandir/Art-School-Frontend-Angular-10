import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public responsiveOptions: any[];
  public images: any[];

 

  

  constructor(
    private primengConfig: PrimeNGConfig
  ) 
  { 
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
      ];
      this.images=[
            {
                "previewImageSrc": "assets/images/pic1.jpg",
                "thumbnailImageSrc": "assets/images/pic1.jpg",
                "alt": "image 1",
                "title": "Title 1"
            },
            {
                "previewImageSrc": "assets/images/pic2.jpg",
                "thumbnailImageSrc": "assets/images/pic2.jpg",
                "alt": "Description for Image 2",
                "title": "Title 2"
            },
            {
              "previewImageSrc": "assets/images/pic3.jpg",
              "thumbnailImageSrc": "assets/images/pic3.jpg",
              "alt": "Description for Image 2",
              "title": "Title 2"
            },
            {
              "previewImageSrc": "assets/images/pic4.jpg",
              "thumbnailImageSrc": "assets/images/pic4.jpg",
              "alt": "Description for Image 2",
              "title": "Title 2"
            },
            {
              "previewImageSrc": "assets/images/pic5.jpg",
              "thumbnailImageSrc": "assets/images/pic5.jpg",
              "alt": "Description for Image 2",
              "title": "Title 2"
            },
            
        ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
