import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'about-group',
  templateUrl: './about-group.component.html',
  styleUrls: ['./about-group.component.scss']
})
export class AboutGroupComponent implements OnInit {

  constructor(
    public img_db: DbService,
    private primengConfig: PrimeNGConfig

  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
