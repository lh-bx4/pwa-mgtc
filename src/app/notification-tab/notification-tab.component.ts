import { Component, OnInit, HostListener } from '@angular/core';
import { VarService } from 'src/service/var.service';
import { AutomationService } from 'src/service/automation.service';

@Component({
  selector: 'app-notification-tab',
  templateUrl: './notification-tab.component.html',
  styleUrls: ['./notification-tab.component.scss']
})
export class NotificationTabComponent implements OnInit {
  
  
  pane:boolean = false;
  paneH:string = "0px";
  paneBR:string = "50%";
  as:AutomationService;

  public get NTH() { return VarService.NTH+"px"; }
  
  getmessages() {
    return this.as.MatureNotifications;
  }
  
  onNotify(uid:string) {
    this.as.close(uid);
  }
  
  allowNotification() {
    this.as.requestNotifications();
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

  constructor() {
    this.as = AutomationService.instance[0];
   }

  ngOnInit(): void {
    this.as.processNotifications();
  }

}
