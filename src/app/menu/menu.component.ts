import { Component, Input, OnInit, HostListener} from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { VarService } from 'src/service/var.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private static icons = ["team", "prog", "camp", "party", "agenda"];

  private static cntnt:ContentComponent;
  static AppendContent(c:ContentComponent) { MenuComponent.cntnt = c; } 
  
  public get MH() { return VarService.MH+"px"; }
  @Input()  readonly menuid:number;
  @Input()  lore:string;
  @Input()  title:string;
  clr:any;
  isSelected:boolean = false;
  static OneIsSelected:boolean = false; 

  getIcon() { return "../../assets/icons/ui_"+MenuComponent.icons[this.menuid]+".png"; }
  
  public getClr() {
    return VarService.getMCLR(this.menuid,"DD");
    //return VarService.gradient(VarService.getMCLR(this.menuid, "DD"),VarService.getMCLR(Number(this.menuid)+1, "DD"),"135deg");
  }

  getTop() { return (this.isSelected ? VarService.NTH : VarService.MH*this.menuid+VarService.NTH)+"px"; }
  getLeft() { return MenuComponent.OneIsSelected && !this.isSelected ? "100%" : "0";  }
  getTransitionDelay() { return this.isSelected ? "0.5s" : "0s"; }
  public getNthOfH(n) { return Math.round(VarService.MH*n).toString()+"px"; }

  public onSwitch() {
    MenuComponent.OneIsSelected=!MenuComponent.OneIsSelected;
    this.isSelected=!this.isSelected;
    MenuComponent.cntnt.onPrepare(MenuComponent.OneIsSelected, this.isSelected ? this.menuid : -1, VarService.getMCLR(this.menuid, "DD"));
  }

  constructor() { }
  ngOnInit() { }
  ngOnAfter() { }
}
