import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationTabComponent } from './notification-tab/notification-tab.component';
import { HscrollmenuComponent } from './hscrollmenu/hscrollmenu.component';
import { PageComponent } from './page/page.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { VarService } from '../service/var.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AutomationService } from '../service/automation.service';
import { throwError } from 'rxjs';

@NgModule({
  //AppComponent,
  declarations: [
    
    AppComponent,
    NotificationTabComponent,
    HscrollmenuComponent,    
    PageComponent,
    ContentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    VarService,
    AutomationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  public vs:VarService= new VarService();
  public as:AutomationService = new AutomationService();
  
  hash(str:string="") {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  password() {
    window.alert("Checking...");
    if (this.hash(window.prompt(">"))!=410387358) {
      alert("unauthorized");
      throw new Error("denied");
    }
  }

  constructor() {
    if (!VarService.DEVMODE) this.password();
  }

  
  
}
