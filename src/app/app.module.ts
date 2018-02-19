import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropDirectiveModule } from "angular4-drag-drop";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ScorepageComponent } from './scorepage/scorepage.component';
import { GameoverComponent } from './gameover/gameover.component';
import { SharedModule } from './shared/shared.module';
import { ScoreService } from './services/score.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ScorepageComponent,
    GameoverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropDirectiveModule,
    SharedModule,
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
