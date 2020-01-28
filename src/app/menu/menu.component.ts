import { Component, Input, OnInit, HostListener} from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public static instances:Array<MenuComponent>=[];
  private static clrs = ["#A62C23","#8C251D","#661B15","#4d1410","#330D0B"]; 
  
  private scrH:number;
  
  @HostListener('window:resize', ['$event']) Size(event?) {
    this.scrH=window.innerHeight;
    this.H=Math.floor((this.scrH-30)/5);
    console.log(this.scrH);
  }

  private cntnt:ContentComponent;
  @Input() private menuid:any;
  @Input() private lore:string;
  @Input() private title:string;
  private H:number;
  private clr:any;
  private isSelected:boolean = false;

  public getH() {
    return this.H.toString()+"px";
  }

  public getTop() {
    return (30+this.menuid*this.H).toString()+"px";
  }

  public getNthOfH(n) {
    return Math.round(this.H*n).toString()+"px";
  }

  public getClr() {
    return MenuComponent.clrs[this.menuid]+"DD";
  }

  public getState() {
    return this.isSelected;
  }

 

  public onSwitch() {
    var el:HTMLCollectionOf<Element> = document.getElementsByTagName("app-menu");
    var inline:string,inhigh:string;
    this.isSelected=!this.isSelected;
    if (this.isSelected) {
      for(var i=0; i<el.length; i++) {
        if (i!=this.menuid) (<HTMLElement>el[i].firstElementChild).style.left="100%";
      }
      setTimeout(() => {
        (<HTMLElement>el[this.menuid].firstElementChild).style.top="30px";
      }, 500);
    } else {
      (<HTMLElement>el[this.menuid].firstElementChild).style.top=this.getTop();
      setTimeout(() => {
        for(var i=0; i<el.length; i++) {
          if (i!=this.menuid) (<HTMLElement>el[i].firstElementChild).style.left="0";
        }
      }, 500);
    }
    if (this.isSelected) {
      this.cntnt.onShow(this.menuid, MenuComponent.clrs[this.menuid]);
    } else {
      this.cntnt.onHide(this.menuid, MenuComponent.clrs[this.menuid])
    }
    
  }

  public setCntnt(c:ContentComponent) {
    this.cntnt=c;
  }

  constructor() { 
    this.Size();
    
  }

  ngOnInit() {
    MenuComponent.instances.push(this);
  }

}
