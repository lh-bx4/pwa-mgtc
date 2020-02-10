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
    new LocalNotif("Bienvenue !", new Date('2020-02-11T10:00:00Z'), "Passe faiRe un touR sur le site pouR découvRiR ce que les Magell'Antic te RéseRvent !"),
    new LocalNotif("Viens défieR les dieux !", new Date('2020-02-11T12:00:00Z'), "Si tu veux tenteR ta chance, inscRis-toi dans le hall toute la jouRnée !"),
    new LocalNotif("Pour les paresseux...", new Date('2020-02-13T14:00:00Z'), "Profite du SAD des Magell'Antic !" , "../assets/files/notif/SAD.png"),
    new LocalNotif("Antikitch", new Date('2020-02-13T20:30:00Z'), "Rejoins-nous pour une soirée toute en finesse."),
    new LocalNotif("Besoin d'une pause ?", new Date('2020-02-17T10:00:00Z'), "Profite du voyage de plaisance organisé par Magellopolis !"),
    new LocalNotif("R", new Date('2020-02-19T10:00:00Z'), "Les Magell'Antic font leur féria !")
  ];
  
  private doNotify:boolean = false;
  
    clearNotifs() {
      this.ScheduledNotifs.forEach(el => {
        localStorage.removeItem(el.UID);
      });
    }

    requestNotifications():void {

      if (!VarService.NA) return;

      //console.log("Permissions:"+Notification.permission);
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
      //this.printNotificationsState();
    }

  processNotifications() {
    if (!VarService.NA) return;
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
    //console.log(y);
    return y;
  }

  get UID() { return this.tag+":"+this.title; }

  push() {
    if (!VarService.NA) return;
    if (this.isMature()) new Notification(this.title, this.options);
  }

  close() {
    localStorage.setItem(this.UID, 'true');
  }


}
