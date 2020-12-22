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
public images: any[]=[
  {
    "imgURL":"assets/images/pic1.jpg",
    "imgCaption":"image1"
  },
  {
    "imgURL":"assets/images/pic2.jpg",
    "imgCaption":"image2"
  },
  {
    "imgURL":"assets/images/pic3.jpg",
    "imgCaption":"image3"
  },
  {
    "imgURL":"assets/images/pic4.jpg",
    "imgCaption":"image4"
  },
  {
    "imgURL":"assets/images/pic5.jpg",
    "imgCaption":"image5"
  }
]

constructor() { }

  ngOnInit(): void {
    set_swiper()
  }

}
