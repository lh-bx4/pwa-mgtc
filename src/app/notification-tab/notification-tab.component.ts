import { Component, OnInit, HostListener } from '@angular/core';
import { VarService } from 'src/service/var.service';

@Component({
  selector: 'app-notification-tab',
  templateUrl: './notification-tab.component.html',
  styleUrls: ['./notification-tab.component.scss']
})
export class NotificationTabComponent implements OnInit {
  
  pane:boolean = false;
  paneH:string = "0px";
  paneBR:string = "50%";

  public get NTH() { return VarService.NTH+"px"; }
static mess = [
  {id:0, title:"You got a message !", lore:"Here is your first notification !! lorem ipsum dezfzneifuzieuhf", seen:false},
  {id:1, title:"You got another message !", lore:"Here is your second notification !! lorem ipsum dezfzneifuzieuhf", seen:false},
];
  getmessages() {
    return NotificationTabComponent.mess;
  }

  howDisplay(n) {
    return NotificationTabComponent.mess[n].seen ? "none" : "block";
  }
  
  onNotify(n) {
    NotificationTabComponent.mess[n].seen=true;
  }
  
  onDropdown() {
    this.pane=!this.pane;
    this.paneH = (this.pane ? VarService.SCRH-VarService.NTH : 0).toString()+"px";
    this.paneBR = this.pane ? "0%" : "50%";
  }

  redirect(n) {
    var x:string = VarService.getL(n);
    alert("Vous allez être redirigé vers "+x);
    window.open(x);
  }

  constructor() { }

  ngOnInit() { }

}
