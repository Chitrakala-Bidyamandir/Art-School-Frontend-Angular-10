import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public cards: any[] ;

  constructor(
    public img_db: DbService,
    private primengConfig: PrimeNGConfig
  ) 
  { 
    this.cards =  [
      {
        "URL": this.img_db.PhotoDb.events[1].pic1,
        "Caption":"from patta chitra event1"
      },
      {
        "URL":this.img_db.PhotoDb.quotes.quotes1,
        "Caption":"Pablo Picasso"
      },
      {
        "URL":this.img_db.PhotoDb.events[1].pic2,
        "Caption":"from patta chitra event1"
      },
      {
        "URL":this.img_db.PhotoDb.quotes.quotes2,
        "Caption":"Threadless Artist Mathiole"
      },
      {
        "URL":this.img_db.PhotoDb.events[1].pic3,
        "Caption":"from patta chitra event1"
      },
      {
        "URL":this.img_db.PhotoDb.quotes.quotes3,
        "Caption":"inspiring quote"
      },
      {
        "URL":this.img_db.PhotoDb.events[1].pic4,
        "Caption":"from patta chitra event1"
      },
      {
        "URL":this.img_db.PhotoDb.quotes.quotes4,
        "Caption":"Anni Albers"
      },
      {
        "URL":this.img_db.PhotoDb.events[1].pic5,
        "Caption":"from patta chitra event1"
      },
      {
        "URL":this.img_db.PhotoDb.quotes.quotes5,
        "Caption":"Edgar Degas"
      },
      {
        "URL":this.img_db.PhotoDb.events[1].pic6,
        "Caption":"from patta chitra event1"
      },
      {
        "URL":this.img_db.PhotoDb.quotes.quotes6,
        "Caption":"Pablo Picasso"
      },
  ];
    
      
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
