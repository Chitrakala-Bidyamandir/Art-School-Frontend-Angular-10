import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public img_db: DbService
  ) { }

  ngOnInit(): void {
  }

}
