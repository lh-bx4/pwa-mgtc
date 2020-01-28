import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-notification-tab',
  templateUrl: './notification-tab.component.html',
  styleUrls: ['./notification-tab.component.scss']
})
export class NotificationTabComponent implements OnInit {
  
  css_height:string = "0px";
  
  onDropdown() {
    if (this.css_height==="0px") {
      this.css_height="100%";
    } else {
      this.css_height="0px";
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
