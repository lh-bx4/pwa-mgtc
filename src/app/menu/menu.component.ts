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
  private static selectinon = [false,false,false,false,false];
  private static animated = [false,false,false,false,false];
  private scrH:number;
  
  @HostListener('window:resize', ['$event']) Size(event?) {
    this.scrH=window.innerHeight;
    this.H=Math.floor((this.scrH-30)/5);
    console.log(this.scrH);
  }

  private cntnt:ContentComponent;
  @Input() private readonly menuid:any;
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

  static selectedmenu:number=-1;
  static selected:boolean=false;
  public selected:boolean=false;
  
  public onSwitch() {
    MenuComponent.selectinon[this.menuid]=!MenuComponent.selectinon[this.menuid];

    
    MenuComponent.selected=!MenuComponent.selected;
    MenuComponent.selectedmenu = MenuComponent.selected ? this.menuid : -1;
    this.selected=true;
    console.log(MenuComponent.selectedmenu+":"+MenuComponent.selected);
  }

  public istoHide():boolean {
    var ret = !MenuComponent.selectinon[this.menuid];
    if (ret) MenuComponent.animated[this.menuid]=true;
    //var x:boolean = MenuComponent.selected && (this.menuid!=MenuComponent.selectedmenu);
    //console.log(MenuComponent.selected+":"+this.menuid+"?"+MenuComponent.selectedmenu+" "+ x)
    //return x;
    return ret;
  }

  public istoSelect():boolean {
    var ret = MenuComponent.selectinon[this.menuid];
    if (ret) MenuComponent.animated[this.menuid]=true;
    return ret;
    
    var x:boolean = MenuComponent.selected && (this.menuid==MenuComponent.selectedmenu);
    //console.log(MenuComponent.selected+":"+this.menuid+"?"+MenuComponent.selectedmenu+" "+ x)
    return x;
  }

  public istoShow():boolean {
    var ret = MenuComponent.animated[this.menuid] && !MenuComponent.selectinon[this.menuid];
    if (ret) MenuComponent.animated[this.menuid]=false;
    //var x:boolean = MenuComponent.selected && (this.menuid!=MenuComponent.selectedmenu);
    //console.log(MenuComponent.selected+":"+this.menuid+"?"+MenuComponent.selectedmenu+" "+ x)
    //return x;
    return ret;

    var x:boolean = !MenuComponent.selected && (this.menuid!=MenuComponent.selectedmenu);
    //console.log(MenuComponent.selected+":"+this.menuid+"?"+MenuComponent.selectedmenu+" "+ x)
    return x;
  }

  public istoDeselect():boolean {
    var ret = MenuComponent.animated[this.menuid] && MenuComponent.selectinon[this.menuid];
    if (ret) MenuComponent.animated[this.menuid]=false;
    MenuComponent.selectinon[this.menuid]=false;
    return ret;
    var x:boolean = !MenuComponent.selected && (this.menuid==MenuComponent.selectedmenu);
    //console.log(MenuComponent.selected+":"+this.menuid+"?"+MenuComponent.selectedmenu+" "+ x)
    return x;
  }

  getAnimationDirection():number {
    return MenuComponent.selected ? -1 : 1;
  }
  /*public onSwitch() {
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
    
  }*/

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
