import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { VarService } from 'src/service/var.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  clr:any;
  current=-1;
  shown:boolean=false;
  pageBR:string="50%";
  
  static THIS:ContentComponent;
  
  public get MEMBERS() { return VarService.MEMBERS; }
  public get SECTIONS() { return VarService.SECTIONS; }
  public get FLYERS() { return VarService.FLYERS; }
  public get SONGS() { return VarService.SONGS; }
  public get LYRICS() { return VarService.LYRICS; }
  public get PARTNERS() { return VarService.PARTNERS; }
  public get MENUS() { return VarService.MENUS; }

  getPath(n) {
    return this.spoil(VarService.FLYERS[n].spoil) ? VarService.FLYERS[n].path : "";
  }

  howShow(n) { 
    
    return n==this.current ? 'showc' : 'hidec'; 
  }
  getTransitionDelay() { return (this.shown ? 0.5 : 0).toString()+"s"; }
  public getH() { return (this.shown ? VarService.PH+1 : 0).toString()+"px"; }
  
  public onPrepare(s:boolean, n:number, c:string) {
    document.getElementById("page").scrollTop=0;
    this.shown=s;
    this.clr=c;
    this.current=n;
    this.pageBR = s ? "0" : "50%"; 
  }

  spoil(b:boolean):boolean {
    return b;
  }

  //Program
  toggleSection(n:number) {
    VarService.SECTIONS.forEach(item => {
      item.id == n ? item.state=!item.state : item.state=false;
    });
  }

  onRedirect(str:string) {
    VarService.onRedirect(str);
  }0

  whichContent(n, m):boolean {
    return n==m;
  }

  //Campaign
  toggleLyrics(n:number) {
    VarService.SONGS.forEach(item => {
      item.id == n ? item.state=!item.state : item.state=false;
    });
  }

  // Party
  // spoil state could be sync to server
  
  onPartyInfo(n:number) {
    let str = "";
    str = VarService.PARTYS[n].spoil ? 
    "Evénemment : "+VarService.PARTYS[n].name+"\n Date : "+VarService.PARTYS[n].date+"\n Thème : "+VarService.PARTYS[n].theme :
    "Secret !";
    alert(str);
  }

  getPartySrc(n:number) {
    return VarService.PARTYS[n].spoil ? VarService.PARTYS[n].src : "../../assets/icons/ui_secret.png"; 
  }

  /*Sanatize(src:string) {
    return this.sanatizer.bypassSecurityTrustResourceUrl(src);
  }*/

  // Calendar - done
  sanatizer:DomSanitizer;
  constructor(private sntz:DomSanitizer) {
    MenuComponent.AppendContent(this);
    this.sanatizer=sntz;
  }

  ngOnInit() {
  }

}
