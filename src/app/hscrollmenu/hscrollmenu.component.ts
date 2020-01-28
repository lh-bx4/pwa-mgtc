import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hscrollmenu',
  templateUrl: './hscrollmenu.component.html',
  styleUrls: ['./hscrollmenu.component.scss']
})
export class HscrollmenuComponent implements OnInit {

  onShowHome() {
    console.log("home");
  }
  onShowCalendar() {

  }
  onShowMenus() {

  }
  onShowEvent() {

  }
  onShowDocuments() {

  }
  onShowCrew() {

  }



  constructor() { }

  ngOnInit() {
  }

}
