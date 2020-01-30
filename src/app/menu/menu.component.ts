import { Component, Input, OnInit, HostListener} from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  static instances:Array<MenuComponent>=[];
  static clrs = ["#A62C23","#8C251D","#661B15","#4d1410","#330D0B"]; 
  selectinon = [false,false,false,false,false];
  animated = [false,false,false,false,false];
  scrH:number;
  
  @HostListener('window:resize', ['$event']) Size(event?) {
    this.scrH=window.innerHeight;
    this.H=Math.floor((this.scrH-30)/5);
    console.log(this.scrH);
  }

   cntnt:ContentComponent;
  @Input()  readonly menuid:any;
  @Input()  lore:string;
  @Input()  title:string;
   H:number;
   clr:any;
   isSelected:boolean = false;

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
  
  public onSwitch() {
    MenuComponent.selected=!MenuComponent.selected;
    MenuComponent.selectedmenu = MenuComponent.selected ? this.menuid : -1;

    MenuComponent.selected ? 
      this.cntnt.onShow(this.menuid, MenuComponent.clrs[this.menuid]) : 
      this.cntnt.onHide(this.menuid, MenuComponent.clrs[this.menuid]);
    //console.log(MenuComponent.selectedmenu+":"+MenuComponent.selected);
  }

  public istoHide():boolean {
    var x:boolean = MenuComponent.selected && (this.menuid!=MenuComponent.selectedmenu);
    //console.log(MenuComponent.selected+":"+this.menuid+"?"+MenuComponent.selectedmenu+" "+ x)
    return x;
  }

  public istoSelect():boolean {
   
    var x:boolean = MenuComponent.selected && (this.menuid==MenuComponent.selectedmenu);
    //console.log(MenuComponent.selected+":"+this.menuid+"?"+MenuComponent.selectedmenu+" "+ x)
    return x;
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
