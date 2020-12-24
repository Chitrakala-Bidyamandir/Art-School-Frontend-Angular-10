import { DbService } from './../../services/db.service';
import { Component, OnInit,Input } from '@angular/core';
import { set_swiper } from 'src/assets/js/custom.js';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
@Input('URL') imgSrc: string;
@Input('caption') imgCap: string;
public images: any[];

constructor(
  public img_db: DbService
) { 
  this.images=[
    {
      "imgURL":this.img_db.PhotoDb.events[1].pic1,
      "imgCaption":"patta chitra season 1"
    },
    {
      "imgURL":this.img_db.PhotoDb.events[1].pic2,
      "imgCaption":"patta chitra season 1"
    },
    {
      "imgURL":this.img_db.PhotoDb.events[1].pic3,
      "imgCaption":"patta chitra season 1"
    },
    {
      "imgURL":this.img_db.PhotoDb.events[1].pic4,
      "imgCaption":"patta chitra season 1"
    },
    {
      "imgURL":this.img_db.PhotoDb.events[1].pic5,
      "imgCaption":"patta chitra season 1"
    }
  ]
}

  ngOnInit(): void {
    set_swiper()
  }

}
