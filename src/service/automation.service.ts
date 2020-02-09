import { Injectable } from '@angular/core';
import { VarService } from './var.service';

@Injectable({
  providedIn: 'root'
})
export class AutomationService {

  // return most recent notifications
  get MatureNotifications() {
    var ret:LocalNotif[]=[];
    this.ScheduledNotifs.forEach(el => {
      if (el.isMature()) ret = [el].concat(ret);
    });
    return ret;
  }

  static instance:AutomationService[]=[]; 
  private init(as:AutomationService) {
    if (AutomationService.instance.length==0) {
      AutomationService.instance.push(as);
    } else {
      console.error("Multiple instances of AutomationService !");
    }
  }

  private ScheduledNotifs:LocalNotif[] = [
    new LocalNotif("test0", new Date('2011-04-11T10:20:30Z'), "text0"),
    new LocalNotif("Bienvenue !", new Date('2011-04-11T10:20:30Z'), "Les Magell'Antic te souhaitent la bienvenue pour ce voyage mythique !", "../assets/icon/ui_forum.png"),
    new LocalNotif("Newcomer", new Date('2020-07-11T10:20:30Z'), "New notification")
  ];
  
  private doNotify:boolean = false;
    

    clearNotifs() {
      this.ScheduledNotifs.forEach(el => {
        localStorage.removeItem(el.UID);
      });
    }

    requestNotifications():void {
      console.log("Permissions:"+Notification.permission);
      switch (Notification.permission) {
        case "denied":console.log("Notifications Denied");
        case "granted":console.log("Notifications Granted");
       default:
          Notification.requestPermission()
          .catch()
          .then(
            () => {
              this.doNotify=true;
              console.log("Notifications enabled");
            },
            () => {
              this.doNotify=false;
              console.log("Notifications not allowed");
            },
          );
      }
    }

    installNotifications():void {
      //Installation
      // Set every not yet stored scheduled notifications to unseen
      this.ScheduledNotifs.forEach(el => {
        if (localStorage.getItem(el.UID)==null) {
          localStorage.setItem(el.UID,'false');
          console.log("Stored "+el.UID);
        } 
      });
      this.printNotificationsState();
    }

  processNotifications() {
    if (Notification.permission=="granted") {
      this.ScheduledNotifs.forEach(el => {
        if (el.isMature()) el.push();
      });
    } else {
      console.log("! Can't push notifications since it's not allowed.");
    }
    
  }

  printNotificationsState() {
    this.ScheduledNotifs.forEach(el => {
      var x = el.LNState[0];
      var y = el.LNState[1];
      console.log((x&&y?"V":"X")+" Notification "+el.tag+":"+el.title+" is"+(x?" born" : "n't born yet")+"."+" It has"+(y?"n't been seen yet.":" already been seen"));
    });
  }

  close(uid:string) {
    this.MatureNotifications.forEach(el => {
      if (el.UID==uid) el.close();
    });
  }

  constructor() {
    this.init(this);
    this.requestNotifications();
    this.installNotifications();
  }

  ngOnInit() {
    //this.clearNotifs();
    
    
  }

}

export class LocalNotif {
  
  public title;
  public tag;
  private date:Date;
  private options;
  public body;

  constructor(tl:string, dt:Date, txt:string, img:string='') {
    this.title=tl;
    this.tag = dt.toUTCString();
    this.body=txt;
    this.date = dt;
    
    this.options={
      badge: VarService.BDG,
      icon: VarService.ICO,
      vibrate: [100, 100, 100, 100, 100, 300],

      tag:dt.toUTCString(),
      body: txt,
      image:img
    };
    
  }

  // used to detect if a notifiaction can be displayed or not
  get LNState() {
    var x = this.date<new Date();
    var y = localStorage.getItem(this.UID)=='false';
    return [x,y];
  }
  
  isMature():boolean {
    var x = this.LNState;
    var y = x[0] && x[1];
    console.log(y);
    return y;
  }

  get UID() { return this.tag+":"+this.title; }

  push() {
    if (this.isMature()) new Notification(this.title, this.options);
  }

  close() {
    localStorage.setItem(this.UID, 'true');
  }


}
