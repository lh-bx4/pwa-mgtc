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
    AppRoutingModule
  ],
  providers: [
    VarService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  
}
