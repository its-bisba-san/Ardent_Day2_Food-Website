import { Component, OnInit } from '@angular/core';
import { homepage } from '../homepage';
import { DebugService } from '../debug.service';
import { HomepageService } from '../homepage.service';
// import { HomepageService } from '../homepage.service';
// from DESKTOP;
// from laptop exper


@Component({
  selector: 'app-homepage-list',
  templateUrl: './homepage-list.component.html',
  styleUrls: ['./homepage-list.component.css'],
  providers:[DebugService]
})
export class HomepageListComponent implements OnInit {
  getHomepage():homepage[] {
    let mockhomepage:homepage[] = [
      {
        id:1,
        item:"Pizza",
        amount:Math.floor((Math.random()*10)+1),
        category:"FOOD",
        location:"KOLKATA",
        spendOn:new Date(2022,13,Math.floor(Math.random()* 30)+1),
        createdOn:new Date(2022,13,Math.floor(Math.random()* 30)+1),
        quantity:Math.floor((Math.random()*10)+1),
      },

      {
        id:1,
        item:"Pizza",
        amount:Math.floor((Math.random()*10)+1),
        category:"FOOD",
        location:"KOLKATA",
        spendOn:new Date(2022,13,Math.floor(Math.random()* 30)+1),
        createdOn:new Date(2022,13,Math.floor(Math.random()* 30)+1),
        quantity:Math.floor((Math.random()*10)+1),
      },

      {
        id:1,
        item:"Pizza",
        amount:Math.floor((Math.random()*10)+1),
        category:"FOOD",
        location:"KOLKATA",
        spendOn:new Date(2022,13,Math.floor(Math.random()* 30)+1),
        createdOn:new Date(2022,13,Math.floor(Math.random()* 30)+1),
        quantity:Math.floor((Math.random()*10)+1),
      },

    ];
    return mockhomepage;
  }

  'title':string;
  'homepage':homepage[];

  constructor(private debugservice: DebugService, private restService:HomepageService) { }

  ngOnInit(): void {
    this.title='Homepage List';
    this.debugservice.info("Homepage List component");
    // this.getHomepageItems();
    this.homepage=this.getHomepage();
  }
  getHomepageItems(){
    this.restService.getHomepageItems().subscribe(data => this.homepage = data);
  }

}
