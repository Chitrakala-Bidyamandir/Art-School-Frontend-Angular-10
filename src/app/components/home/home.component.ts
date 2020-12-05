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
                "previewImageSrc": "http://192.168.1.6:3000/pic1.jpg",
                "thumbnailImageSrc": "http://192.168.1.6:3000/pic1.jpg",
                "alt": "Description for Image 1",
                "title": "Title 1"
            },
            {
                "previewImageSrc": "http://192.168.1.6:3000/pic2.jpg",
                "thumbnailImageSrc": "http://192.168.1.6:3000/pic2.jpg",
                "alt": "Description for Image 2",
                "title": "Title 2"
            },
            {
              "previewImageSrc": "http://192.168.1.6:3000/pic3.jpg",
              "thumbnailImageSrc": "http://192.168.1.6:3000/pic2.jpg",
              "alt": "Description for Image 2",
              "title": "Title 2"
            },
            {
              "previewImageSrc": "http://192.168.1.6:3000/pic4.jpg",
              "thumbnailImageSrc": "http://192.168.1.6:3000/pic2.jpg",
              "alt": "Description for Image 2",
              "title": "Title 2"
            },
            {
              "previewImageSrc": "http://192.168.1.6:3000/pic5.jpg",
              "thumbnailImageSrc": "http://192.168.1.6:3000/pic2.jpg",
              "alt": "Description for Image 2",
              "title": "Title 2"
            },
            
        ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
