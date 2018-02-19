import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { Loading1Component } from './loading1/loading1.component';
import { ScoreanimateComponent } from './scoreanimate/scoreanimate.component';
import { GemsComponent } from './gems/gems.component';
import { CheckComponent } from './check/check.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingComponent, Loading1Component, ScoreanimateComponent, GemsComponent, CheckComponent],
  exports: [LoadingComponent, CheckComponent],
})
export class SharedModule { }
