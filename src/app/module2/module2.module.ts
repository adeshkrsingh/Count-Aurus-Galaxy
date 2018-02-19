import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { GamehomeComponent } from './gamehome/gamehome.component';
import { IntroComponent } from './intro/intro.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  declarations: [GamehomeComponent, IntroComponent, HelpComponent]
})
export class Module2Module { }
