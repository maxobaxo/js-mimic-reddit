import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { FunnyComponent } from './funny/funny.component';
import { WoahdudeComponent } from './woahdude/woahdude.component';
import { FacepalmComponent } from './facepalm/facepalm.component';
import { WorldnewsComponent } from './worldnews/worldnews.component';
import { NatureisfuckinglitComponent } from './natureisfuckinglit/natureisfuckinglit.component';
import { MuckingFagicalComponent } from './mucking-fagical/mucking-fagical.component';
import { ScienceComponent } from './science/science.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FunnyComponent,
    WoahdudeComponent,
    FacepalmComponent,
    WorldnewsComponent,
    NatureisfuckinglitComponent,
    MuckingFagicalComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
