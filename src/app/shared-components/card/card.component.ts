import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input('data') obj: any;
  constructor(private primengConfig: PrimeNGConfig) { 

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
