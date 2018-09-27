import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.isConnected = false;
  }

  logout() {
    this.sharedService.isConnected = false;
  }

}
