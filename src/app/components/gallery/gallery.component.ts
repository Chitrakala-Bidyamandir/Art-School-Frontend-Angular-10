import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: any[];
  
  displayCustom: boolean;

  activeIndex: number = 0;

    responsiveOptions:any[] = [
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

    responsiveOptions2:any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];




  constructor(
    private primengConfig: PrimeNGConfig
      ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.images = [
      {
        "previewImageSrc": "assets/images/pic1.jpg",
        "thumbnailImageSrc": "assets/images/pic1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic2.jpg",
      "thumbnailImageSrc": "assets/images/pic2.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic3.jpg",
      "thumbnailImageSrc": "assets/images/pic3.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic4.jpg",
        "thumbnailImageSrc": "assets/images/pic4.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic5.jpg",
        "thumbnailImageSrc": "assets/images/pic5.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic6.jpg",
        "thumbnailImageSrc": "assets/images/pic6.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },{
        "previewImageSrc": "assets/images/pic1.jpg",
        "thumbnailImageSrc": "assets/images/pic1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic2.jpg",
      "thumbnailImageSrc": "assets/images/pic2.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic3.jpg",
      "thumbnailImageSrc": "assets/images/pic3.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic4.jpg",
        "thumbnailImageSrc": "assets/images/pic4.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic5.jpg",
        "thumbnailImageSrc": "assets/images/pic5.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic6.jpg",
        "thumbnailImageSrc": "assets/images/pic6.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },{
        "previewImageSrc": "assets/images/pic1.jpg",
        "thumbnailImageSrc": "assets/images/pic1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic2.jpg",
      "thumbnailImageSrc": "assets/images/pic2.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic3.jpg",
      "thumbnailImageSrc": "assets/images/pic3.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic4.jpg",
        "thumbnailImageSrc": "assets/images/pic4.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic5.jpg",
        "thumbnailImageSrc": "assets/images/pic5.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic6.jpg",
        "thumbnailImageSrc": "assets/images/pic6.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },{
        "previewImageSrc": "assets/images/pic1.jpg",
        "thumbnailImageSrc": "assets/images/pic1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic2.jpg",
      "thumbnailImageSrc": "assets/images/pic2.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
      "previewImageSrc": "assets/images/pic3.jpg",
      "thumbnailImageSrc": "assets/images/pic3.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic4.jpg",
        "thumbnailImageSrc": "assets/images/pic4.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic5.jpg",
        "thumbnailImageSrc": "assets/images/pic5.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/images/pic6.jpg",
        "thumbnailImageSrc": "assets/images/pic6.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      }
    ]
  }
  
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}

}
