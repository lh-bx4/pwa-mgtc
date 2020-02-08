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
      if (el.isMature) ret = [el].concat(ret);
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
  ];
  
  private doNotify:boolean = false;
    

    clearNotifs() {
      MySto
      this.ScheduledNotifs.forEach(el => {
        localStorage.removeItem(el.UID);
      });
    }

    requestNotifications():void {
      switch (Notification.permission) {
        case "default":
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
        case "denied":console.log("Notifications Denied");
        case "granted":console.log("Notifications Granted");
      }
    }

    installNotifications():void {
      //Installation
      // Set every scheduled notifications to unseen
      if (localStorage.getItem('Registered')==null) {
        console.log("Registering...");
        localStorage.setItem('Registered','true');
        this.ScheduledNotifs.forEach(el => {
          localStorage.setItem(el.UID,'false');
        });
      }
  }

  processNotifications() {
    this.ScheduledNotifs.forEach(el => {
      el.push();
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

export class LocalNotif extends Notification {
  
  private date:Date;

  constructor(tl:string, dt:Date, txt:string, img:string='') {
    super(tl, {
      badge: VarService.BDG,
      icon: VarService.ICO,
      vibrate: [100, 100, 100, 100, 100, 300],

      tag:dt.toUTCString(),
      body: txt,
      image:img,
    });
    this.date = dt;
  }

  // used to detect if a notifiaction can be displayed or not
  get isMature():boolean {
    var x = this.date<new Date()
    var y = localStorage.getItem(this.UID)=='false';
    console.log((x&&y?"V":"X")+" Notification "+this.tag+":"+this.title+" is"+(x?" born" : "n't born yet")+"."+" It has"+(y?"n't been seen yet.":" already been seen"));
    return x&&y;
  }

  get UID() { return this.tag+":"+this.title; }

  push() {
    if (this.isMature) {
      navigator.serviceWorker.ready.then(function(serviceWorker) {
        serviceWorker.showNotification(this.title, this.options);
      });
    }
  }

  close() {
    localStorage.setItem(this.UID, 'true');
  }


}
