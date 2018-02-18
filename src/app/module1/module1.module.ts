import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { GamehomeComponent } from './gamehome/gamehome.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [GamehomeComponent]
})
export class Module1Module { }
