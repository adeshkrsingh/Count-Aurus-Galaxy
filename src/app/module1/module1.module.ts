import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirectiveModule } from "angular4-drag-drop";
import { Module1RoutingModule } from './module1-routing.module';
import { GamehomeComponent } from './gamehome/gamehome.component';
import { IntroComponent } from './intro/intro.component';
import { HelpComponent } from './help/help.component';
import { SharedModule } from '../shared/shared.module';
// import { Howl } from 'howler';
@NgModule({
  imports: [
    CommonModule,
    DragDropDirectiveModule,
    Module1RoutingModule,
    SharedModule,
    // Howl
  ],
  declarations: [GamehomeComponent, IntroComponent, HelpComponent]
})
export class Module1Module { }
