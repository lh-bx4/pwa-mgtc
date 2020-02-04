import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  pH:string;
  H:number;
  W:number;
  clr:any;
  state:string="hidden";
  current=-1;
  members = [
    {name:"Louis HOAREAU - XV", lore:"Jamais 2 sans 3 fois 5", src:'../../assets/files/team/polo/POLO_nom.JPG'}
  ];
  sections = [
    {
      id:0, title:"Pole Soirées", lore:"soiréeees"
    },
    {
      id:1, title:"Pole STH", lore:"intééé"
    },

  ];

  public isSelected(n):boolean {
    return n==this.current;
  }


  animate:boolean=false;
  getAnimation(s:string):boolean {
    var x = this.current==-1;
    var y = s!="show" ? x : !x;
    console.log(s+":"+this.current+">"+y);
    return y;
    console.log("getAnimation1 "+this.animate+":"+this.current);
    var b2,ret:boolean;
    var b1:number;
    b1= (s=="show" ? 1 : 0) ^ (this.current==-1 ? 1 : 0);
    if (this.animate) {
      this.animate=false;
      ret = b1!=0;
    } else {
      ret= false;
    }
    console.log("getAnimation2 "+ret+":"+s);
    return ret;

  }

  @HostListener('window:resize', ['$event']) Size(event?) {
    this.H=Math.floor(4*(window.innerHeight-30)/5);
    this.W=window.innerWidth;
    this.pH = Math.round(95/100*1.8*this.W).toString()+"px";
    console.log("content::"+this.H+":"+this.W);
  }

  getDisplay(n:number):boolean {
    //console.log("getDisplay"+n+":"+this.current);
    return (n==this.current);
  }

  public getH() {
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
    this.animate=true;
    console.log(n+"onShow");
  }

  public onHide(n:number, c:string) {
    this.clr=c+"DD";
    this.current=-1;
    this.animate=true;
    console.log(n+"onShow");
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
