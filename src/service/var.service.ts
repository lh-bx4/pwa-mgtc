import { Injectable, HostListener} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarService {

  srcH:number;
  notification_tabH:number = 30;
  menus:number = 5;

  @HostListener('window:resize', ['$event']) Size(event?) {
    this.srcH=window.innerHeight;
  }

}
