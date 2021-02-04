import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { HeaderComponent } from './header/header.component';
import { NodeComponent } from './node/node.component';

import { LevelComponent } from './level/level.component'

//


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    HeaderComponent,
    NodeComponent,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { 



  constructor() {}
}
