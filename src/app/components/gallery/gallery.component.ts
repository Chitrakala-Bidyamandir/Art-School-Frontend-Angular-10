import { DbService } from './../../services/db.service';
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
    public img_db: DbService,
    private primengConfig: PrimeNGConfig
      ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.images = [
      
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic1,
      },
      {
      "previewImageSrc": this.img_db.PhotoDb.events[1].pic2,

      },
      {
      "previewImageSrc": this.img_db.PhotoDb.events[1].pic3,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic4,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic5,
    
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic6,
   
      },{
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic7,
   
      },
      {
      "previewImageSrc": this.img_db.PhotoDb.events[1].pic8,

      },
      {
      "previewImageSrc": this.img_db.PhotoDb.events[1].pic9,
 
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic10,
  
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic11,
    
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic12,
 
      },{
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic13,

      },
      {
      "previewImageSrc": this.img_db.PhotoDb.events[1].pic14,
  
      },
      {
      "previewImageSrc": this.img_db.PhotoDb.events[1].pic15,
  
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic16,
    
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.events[1].pic17,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.creators.initiator,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.creators.teacher2,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.creators.teacher3,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.creators.teacher4,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.creators.teacher5,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.group_pics.group1,
        
      },{
        "previewImageSrc": this.img_db.PhotoDb.quotes.quotes1 ,

      },
      {
      "previewImageSrc": this.img_db.PhotoDb.quotes.quotes2,
 
      },
      {
      "previewImageSrc": this.img_db.PhotoDb.quotes.quotes3,
   
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.quotes.quotes4,

      },
      {
        "previewImageSrc": this.img_db.PhotoDb.quotes.quotes5,
   
      },
      {
        "previewImageSrc": this.img_db.PhotoDb.quotes.quotes6,

      }
    ]
  }
  
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}

}
