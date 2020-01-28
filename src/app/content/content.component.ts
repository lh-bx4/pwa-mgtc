import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public pH:string;
  public teste:string = "50px";
  private H:number;
  private W:number;
  private clr:any;
  private state:string="hidden";
  private current=-1;
  private members = [
    {name:"me", lore:"lorem ipsum", src:"./"}
  ];
  private sections = [
    {
      id:0, title:"Pole Soirées", lore:"soiréeees"
    },
    {
      id:1, title:"Pole STH", lore:"intééé"
    },

  ];

  @HostListener('window:resize', ['$event']) Size(event?) {
    this.H=Math.floor(4*(window.innerHeight-30)/5);
    this.W=window.innerWidth;
    this.pH = Math.round(95/100*1.8*this.W).toString()+"px";
    console.log("content::"+this.H+":"+this.W);
  }

  getDisplay(n:number) {
    if (n==this.current) {
      return this.state;
    } else {
      return "none";
    }
  }

  private getH() {
    return this.H+"px";
  }
  private getW() {
    return this.W+"px";
  }
  public posterH():string {
    var format:number = Math.sqrt(2);
    return Math.round(96/100*format*this.W).toString()+"px";
  }

  public onShow(n:number, c:string) {
    this.clr=c+"DD";
    this.current=n;
    setTimeout(() => {
        this.state="block";
    }, 1000);
  }

  public onHide(n:number, c:string) {
    this.clr=c+"DD";
    this.current=n;
    this.state="none";
  }

  togglesection2(name:string) {
    var el = document.getElementsByClassName("accordion2");
    Array.from(el).forEach(el => {
      (<HTMLElement>el.nextSibling).style.height="0";
    });
    var e:string = (<HTMLElement>document.getElementById(name).nextSibling).style.height="50%";
  }
  toggleGsection(n:number) {
    var el = document.getElementById("page").getElementsByTagName("div");
    Array.from(el).forEach(el => {
      el.style.height="0";
    })
    var e:string = (<HTMLElement>document.getElementById("section"+n.toString()).nextSibling).style.height="50%";
  }


  constructor() {
    this.Size();
  }

  ngOnInit() {
    for(var i=0; i<MenuComponent.instances.length; i++) {
      MenuComponent.instances[i].setCntnt(this);
    }
  }

}
