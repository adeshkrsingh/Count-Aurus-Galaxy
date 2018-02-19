import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamehomeComponent } from './gamehome/gamehome.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'play',
    component: GamehomeComponent,
  },
  {
    path: 'help',
    component: GamehomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
