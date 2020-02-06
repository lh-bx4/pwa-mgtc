import { Component } from '@angular/core';
import { VarService } from 'src/service/var.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public vs:VarService= new VarService();
  
  constructor() {

  }
}
