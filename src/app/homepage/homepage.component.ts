import { Component, OnInit } from '@angular/core';
import { homepage } from '../homepage';
// import { DebugService } from '../debug.service';
// import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  'title':string;
  'homepage': homepage;

  constructor() { }

  ngOnInit(): void {
    this.title="FOOD WEBSITE";
    this.homepage={
      id:1,
      item:"burger",
      amount:200,
      category:"Food",
      location:"Kolkata",
      spendOn:new Date(2022,1,5,8,12,14),
      createdOn:new Date(2022,1,5,8,12,14),
      quantity:3
    };
  }

}
